import React from 'react';
import validator from 'validator';
import '../signup/signup.css';
import Swal from 'sweetalert2'
class SignUp extends React.Component{
    constructor(props){
        super(props);
        this.state={firstname:'',lastname:'',username:'',email:'',password:'',confirmpassword:'',firstnamerequired:false,lastnamerequired:false,usernamerequired:false,usernameexist:false,emailrequired:false,emailexist:false,passwordrequired:false,confirmpasswordrequried:false,equalpassword:false,emailmatch:false,formvalid:false};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    secondchange=(event)=>{
        this.handleChange(event);
        if(event.target.getAttribute('name')==="confirmpassword" && this.state.confirmpasswordrequried!=='')
        {
            if(event.target.value!==this.state.password)
            {
                this.setState({equalpassword:true})
            }
            else{
                this.setState({equalpassword:false})
            }
        }
        if(event.target.getAttribute('name')==="password" && this.state.confirmpasswordrequried!=='')
        {
            if(event.target.value!==this.state.confirmpassword)
            {
                this.setState({equalpassword:true})
            }
            else{
                this.setState({equalpassword:false})
            }
        }
        if(event.target.getAttribute('name')==="email" && this.state.emailrequired===false)
        {
            if(validator.isEmail(event.target.value))
            {
                this.setState({emailmatch:false})
            }
            else{
                this.setState({emailmatch:true})
            }
        }
        this.validateform();
    }

    handleChange(event) { 
        this.setState({[event.target.getAttribute('name')]: event.target.value});  
        if(event.target.getAttribute('name')==="firstname")
        {
            if(event.target.value==="")
            {
                this.setState({firstnamerequired:true})
            }
            else{
                this.setState({firstnamerequired:false})
            }
        }
        else if(event.target.getAttribute('name')==="lastname")
        {
            if(event.target.value==="")
            {
                this.setState({lastnamerequired:true})
            }
            else{
                this.setState({lastnamerequired:false})
            }
        } 
        else if(event.target.getAttribute('name')==="username")
        {
            this.setState({usernameexist:false})
            if(event.target.value==="")
            {
                this.setState({usernamerequired:true})
            }
            else{
                this.setState({usernamerequired:false})
            }
        }
        else if(event.target.getAttribute('name')==="email")
        {
            this.setState({emailexist:false})
            if(event.target.value==="")
            {
                this.setState({emailrequired:true})
            }
            else{
                this.setState({emailrequired:false})
            }
            if(validator.isEmail(event.target.value))
            {
                this.setState({emailmatch:false})
            }
        }
        else if(event.target.getAttribute('name')==="password")
        {
            if(event.target.value==="")
            {
                this.setState({passwordrequired:true})
            }
            else{
                this.setState({passwordrequired:false})
            }
            if(this.state.confirmpassword!=="" && (this.state.confirmpassword!==this.state.password))
            {
                this.setState({equalpassword:true})
            }
            else{
                this.setState({equalpassword:false})
            }
        }
        else if(event.target.getAttribute('name')==="confirmpassword")
        {
            if(event.target.value==="")
            {
                this.setState({confirmpasswordrequired:true})
            }
            else{
                this.setState({confirmpasswordrequired:false})
            }
        }
        this.validateform();            
    }
    validateform=()=>{
        if(this.state.email!=='' && this.state.firstname!=='' && this.state.lastname!=='' && this.state.email!=='' && this.state.username!=='' && this.state.email!=='' && this.state.password!=='' && this.state.confirmpassword!=='')
        {
            if( this.state.emailmatch===false && this.state.confirmpassword===this.state.password)
            {
                this.setState({formvalid: true})
            }
            else{
                this.setState({formvalid:false})
            }
        }
        else{
            this.setState({formvalid: false})
        }
    }
    async send(user){
        const { value: formValues } =await Swal.fire({
            title: 'Insert code sent to email',
            html:
                '<div className="otp-screen" id="otp-screen">'+
                '<input name="input1" id="input_1" type="text" maxlength="1" class="center" size="1"  required>' +
                '<input name="input2" id="input_2" type="text" maxlength="1" class="center" size="1" required>'+
                '<input id="input_3" type="text" maxlength="1" class="center" size="1" required>' +
                '<input id="input_4" type="text" maxlength="1" class="center" size="1" required>' +
                '<input id="input_5" type="text" maxlength="1" class="center" size="1" required>' +
                '<input id="input_6" type="text" maxlength="1" class="center" size="1" required>'+
                '</div>',
            focusConfirm: false,
            allowOutsideClick: false,
            target: document.getElementById('otp-screen2'),
            preConfirm: () => {
                return [
                    document.getElementById('input_1').value,
                    document.getElementById('input_2').value,
                    document.getElementById('input_3').value,
                    document.getElementById('input_4').value,
                    document.getElementById('input_5').value,
                    document.getElementById('input_6').value
                    ]
            }
        })
        console.log(formValues);
        const code=formValues.toString().replaceAll(',','');
        fetch('http://localhost:3001/verifyemail',{
            method: 'POST',
            mode: 'cors',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
            "verify":{
                "username": this.state.username,
                "code": code
            }
        })
    }).then(async function(response){
            console.log(response);
    })
    }
    handleSubmit=(event)=> {
        let self=this;
        fetch('http://localhost:3001/store-data',{
            method: 'POST',
            mode: 'cors',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
              },
            body: JSON.stringify({
                "user":{
                    "firstname": this.state.firstname,
                    "lastname": this.state.lastname,
                    "username": this.state.username,
                    "email": this.state.email,
                    "password": this.state.password
                }
            })
        }).then(async function(response){
            response.json().then((data)=>{
                console.log(data.message);
                if(data.message==="inserted")
                {
                    self.send(self.state.username);
                }
                else if(data.message==="username duplicate")
                {
                    self.setState({usernameexist:true});
                }
                else if(data.message==="email duplicate")
                {
                    self.setState({emailexist:true});
                }
            })
        })
        event.preventDefault();
    }   
    render()
    {
        return(
            <form id="form" onSubmit={this.handleSubmit}>        
                <h1>Register an account</h1>
                {
                    this.state.firstnamerequired===true &&
                    <p className="error">First name is required</p>
                }   
                <input id="input" type="text" placeholder="First name" name="firstname" value={this.state.firstname} onChange={this.handleChange} onBlur={this.handleChange} className={this.state.firstnamerequired ? 'inputvalid':''} required/>        
                {
                    this.state.lastnamerequired===true &&
                    <p className="error">Last name is required</p>
                } 
                <input id="input" type="text"  name="lastname" placeholder="Last name" value={this.state.lastname} onChange={this.handleChange} onBlur={this.handleChange} className={this.state.lastnamerequired ? 'inputvalid':''} required/>
                {
                    this.state.usernamerequired===true &&
                    <p className="error">Username is required</p>
                }
                {
                    this.state.usernameexist===true &&
                    <p className="error">Username is already in use</p>
                } 
                <input id="input" type="text" name="username" placeholder="Username" value={this.state.username} onChange={this.handleChange} onBlur={this.handleChange} className={this.state.usernamerequired ||this.state.usernameexist? 'inputvalid':''} required/>       
                {
                    this.state.emailrequired===true &&
                    <p className="error">Email is required</p>
                }
                {
                    this.state.emailmatch===true && this.state.emailrequired===false &&
                    <p className="error">Email is invalid</p>
                }
                {
                    this.state.emailexist===true &&
                    <p className="error">Email is already in use</p>
                }  
                <input id="input" type="email"  placeholder="Email" name="email" value={this.state.email} onChange={this.handleChange} onBlur={this.secondchange} className={(this.state.emailrequired||this.state.emailmatch||this.state.emailexist) ? 'inputvalid':''} required/>
                {
                    this.state.passwordrequired===true &&
                    <p className="error">Password is required</p>
                } 
                <input id="input" type="password" name="password" placeholder="Password"value={this.state.password} onChange={this.secondchange} onBlur={this.secondchange} className={this.state.passwordrequired ? 'inputvalid':''} required/>
                {
                    this.state.confirmpasswordrequired===true &&
                    <p className="error">Confirm password is required</p>
                }
                {
                    this.state.equalpassword===true && this.state.confirmpasswordrequired===false &&
                    <p className="error">Passwords don't matchup</p>
                } 
                <input id="input" type="password" name="confirmpassword" placeholder="Confirm password" value={this.state.confirmpassword} onChange={this.secondchange} onBlur={this.secondchange} className={(this.state.confirmpasswordrequired || (this.state.equalpassword && this.state.confirmpassword!=='')) ? 'inputvalid':''} required/>
                <input id="input" type="submit" value="Submit" />
            </form>
        );
    }
}
export default SignUp;