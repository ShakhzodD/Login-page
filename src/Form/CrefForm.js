import React from 'react';
import "./Form.css"
class CrefForm extends React.Component {
constructor(){
    super();
    this.state={
        card:"",
        cv:"",
        name:""
    }
this.cardRef=React.createRef();
this.cvRef=React.createRef();
this.nameRef=React.createRef()

}

handleChange=(e)=>{
    this.setState({[e.target.name]:e.target.value}, ()=>{
        if(this.state.card.length ===16){
            this.cvRef.current.focus()
        }

        if(this.state.cv.length ===4){
            this.nameRef.current.focus()
        }
    })
}

componentDidMount(){
this.cardRef.current.focus();
}
    render() {
        const {card, cv, name}=this.state
        return (
            <div className="form">
                <h1>Form</h1>
                <input type="text"
                name="card"
                placeholder="Card"
                value={card}
                ref={this.cardRef}
                onChange={this.handleChange} />
         
                <input type="text"
                 name="cv"
                 value={cv}
                 placeholder="CV"
                 ref={this.cvRef}
                 onChange={this.handleChange}/>
         
         <input type="text"
         name="name"
         placeholder="name"
         value={name}
         ref={this.nameRef}
         onChange={this.handleChange} />
            
            <button>
                Tasdiqlash
            </button>
            </div>
        );
    }
}

export default CrefForm;
