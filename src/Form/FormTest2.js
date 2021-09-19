import React from 'react';
import './Form.css'
class FormTest2 extends React.Component {
    state={
        email:"",
        checkbox:false
    }

    handleEmail = (e)=>{
        this.setState({email:e.target.value})
    }

    handleCheckbox=(e)=>{
        this.setState({checkbox:e.target.checked})
    }

    hanldeSubmit=()=>{
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        const isEmailValid=re.test(this.state.email);
        const isCheckboxValid=this.state.checkbox


        if(!isEmailValid){
            alert("Emailda hatolik");
            return
        }

        if(!isCheckboxValid){
            alert("hamma tartibga roya qilmadingiz")
            return    
            }


        alert("tashrifingiz uchun rahmat")

        this.setState({email:"", checkbox:false})
    }
    render() {
        const {email, checkbox}=this.state
        return (
            <div className="form">
                <h1>Form</h1>

                <input type="email"
                name="email"
                value={email}
                placeholder="Email"
                onChange={this.handleEmail}

                 />

                 <input type="checkbox"
                 checked={checkbox}
                 name="checkbox" 
                 onChange={this.handleCheckbox}/>

                 <button onClick={this.hanldeSubmit}>Tasidqlash</button>
            </div>
        );
    }
}

export default FormTest2;
