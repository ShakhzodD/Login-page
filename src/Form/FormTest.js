import React from 'react';
import './Form.css';
class FormTest extends React.Component {
state={
    name:"",
    email:"",
    message:"",
    select:"",
    subscription:false,
    gender:""    
}

handleChange=(e)=>{
    this.setState({[e.target.name]:e.target.value})
}

handleChecked=(e)=>{
this.setState({[e.target.name]:e.target.checked})
}

handleSubmit =()=>{    
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const isNameValid=this.state.name,
     isEmailValid=re.test(this.state.email),
     isTextValid=this.state.message,
     isSelectValid=this.state.select,
     isSubscriptValid=this.state.subscription,
     isGenderValid=this.state.gender;

     if(isNameValid.length <3 ){
         alert("ismingiz 3harfdan kop bolishi kerak")
         return
     }

     if(!isEmailValid){
         alert("Emailingiz xato");
         return
     }

     if(isTextValid.length <3 ){
        alert("Text 3harfdan kop bolishi kerak")
        return
    }

    if(!isSelectValid){
        alert("raqamlar bosh")
        return
    }

    if(!isSubscriptValid){
        alert("hamma qoidalarga rozi bolmading")
        return
    }
    if(!isGenderValid){
        alert("gender bosh")
        return
    }

    alert("Tashrifingiz uchun rahmat")

    this.setState({email:"", name:"",message:"", select:"", subscription:false, gender:""})
}
    render() {
        const {name, email, message, select, subscription, gender}=this.state
        return (
            <div className="form">
                <h1>Form</h1>

                <input type="text"
                name="name"
                value={name}
                placeholder="name"
                onChange={this.handleChange}
                 />

                <input type="email"
                name="email"
                value={email}
                placeholder="email"
                onChange={this.handleChange}
                 />

                 <textarea 
                 name="message"
                 placeholder="message"
                 value={message}
                 onChange={this.handleChange}></textarea>

                 <select name="select" onChange={this.handleChange} value={select}>
                <option value="disable"></option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                 </select>

                 <input type="checkbox"
                name="subscription"
                checked={subscription}
                onChange={this.handleChecked} />

                <input type="radio"
                 name="gender"
                 value="male"
                 onChange={this.handleChange} />Male

                <input type="radio"
                 name="gender"
                 value="famale"
                 onChange={this.handleChange} />famale

<button onClick={this.handleSubmit}>Tasdiqlash</button>
            </div>
        );
    }
}
export default FormTest;
