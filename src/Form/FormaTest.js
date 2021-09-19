import React from 'react';
import './Form.css';
class FormaTest extends React.Component {
state={
    email:"",
    checkbox:false
}
handleEmail = (e)=>{
    this.setState({email:e.target.value})
}

handleChecked=(e)=>{
    this.setState({checkbox:e.target.checked})
}

handleSubmit=()=>{
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const isValidEmail=re.test(this.state.email)
    const isValidChecked=this.state.checkbox;

    if(!isValidEmail){
        alert("sizni email hato")
        return
    }

    if(!isValidChecked){
        alert("siz hamma qoidalarga rozi bolishingiz kerak")
        return
    }

    this.setState({email:"", checkbox:false})

    alert("rahmat bizni kuzatib borganingiz uchun")
}
    render() {
        const {email, checkbox}=this.state
        return (
        <div className="form">
            <h1>Form</h1>
            <input type="email"
             name="email"
             placeholder="Email"
             value={email}
             onChange={this.handleEmail} />
             
             <input type="checkbox"
             onChange={this.handleChecked}
             checked={checkbox}
             name="checkbox"
             />Roziman

             <button onClick={this.handleSubmit}>Tasdiqlash</button>
        </div>
                
      
        );
    }
}


export default FormaTest;
