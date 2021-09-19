import React from 'react';
import './Form.css'

export default class Form extends React.Component{
state={
    firstName:"",
    email:"",
    message:"",
    select:"",
    subscription:false,
    gender:""
}

changeHandler= (e)=>{
    this.setState({[e.target.name]:e.target.value})
}

checkedHandler = (e) =>{
    this.setState({[e.target.name]:e.target.checked})
    
}

validateName = () =>{
    if(this.state.firstName.length <5) {
        alert("Sizning ismingiz 5 harfdan oshgan bolishi kerak")
    }
}
validateEmail= ()=> {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
   if(!re.test(this.state.email)) {
       alert("email is not valid")
   }
}

render(){
    const {firstName, email, message, select, subscription, gender}= this.state
    return(
        <div className="form">
            <h1>Form</h1>
            <input type="text"
             name="firstName"
             placeholder="First name"
             value={firstName}
             id=""
             onBlur={this.validateName}
             onChange={this.changeHandler} />
        
            <input type="text"
            name="email"
            placeholder="Email"
            value={email}
            id=""
            onBlur={this.validateEmail}
            onChange={this.changeHandler} />
       
            <textarea 
            name="message"
            id=""
            placeholder="Message"
            onChange={this.changeHandler}
            value={message}></textarea>
      
            <select onChange={this.changeHandler} name="select" value={select}>
<option value="1">1</option>
<option value="2">2</option>
<option value="3">3</option>
            </select>
        <label htmlFor="">
            <input type="checkbox" onChange={this.checkedHandler} name="subscription" checked={subscription}/>
            Subscription
        </label>
      

      <input type="radio" name="gender" value="male" onChange={this.changeHandler} />Male
      <input type="radio" name="gender" value="female" onChange={this.changeHandler} />Female
        </div>
    )
}
}
