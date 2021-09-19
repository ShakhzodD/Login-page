import React from 'react';
class BowqarBol extends React.Component {
constructor() {
    super();
    this.firstNameRef=React.createRef();
    this.cardRef=React.createRef()
}
    handeClick=(e)=>{
        e.preventDefault()
        if(this.cardRef.current.value.length<16){
            alert("16 harfdan kam")
          return
        }
    }
    render() {

        return (
            <div className="form">
                <h1>Form</h1>
                <form onSubmit={this.handeClick}>
                <input type="text"
                name="card"
                placeholder="Card"
                ref={this.cardRef} 
                />
         
                <input type="text"
                 name="cv"
                 placeholder="CV"
                 ref={this.firstNameRef}/>

            <button>
                Tasdiqlash
            </button>
                </form>
             
                 

            </div>
        );
    }
}

export default BowqarBol;
