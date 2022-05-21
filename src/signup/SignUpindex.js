import React from 'react';
import validator from 'validator';
import '../signup/signup.css';
class SignUp extends React.Component{
    constructor(props){
        super(props);
        this.state={firstname:'',lastname:'',username:'',email:'',password:'',confirmpassword:'',firstnamerequired:false,lastnamerequired:false,usernamerequired:false,emailrequired:false,passwordrequired:false,confirmpasswordrequried:false,equalpassword:false,emailmatch:false,formvalid:false};
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
    handleSubmit=(event)=> {
        event.preventDefault();
        alert('A name was submitted: ' + this.state.firstname);
    }   
    render()
    {
        return(
            <form onSubmit={this.handleSubmit}>        
                <h1>Register an account</h1>
                {
                    this.state.firstnamerequired===true &&
                    <p className="error">First name is required</p>
                }   
                <input type="text" placeholder="First name" name="firstname" value={this.state.firstname} onChange={this.handleChange} onBlur={this.handleChange} className={this.state.firstnamerequired ? 'inputvalid':''} required/>        
                {
                    this.state.lastnamerequired===true &&
                    <p className="error">Last name is required</p>
                } 
                <input type="text"  name="lastname" placeholder="Last name" value={this.state.lastname} onChange={this.handleChange} onBlur={this.handleChange} className={this.state.lastnamerequired ? 'inputvalid':''} required/>
                {
                    this.state.usernamerequired===true &&
                    <p className="error">Username is required</p>
                } 
                <input type="text" name="username" placeholder="Username" value={this.state.username} onChange={this.handleChange} onBlur={this.handleChange} className={this.state.usernamerequired ? 'inputvalid':''} required/>       
                {
                    this.state.emailrequired===true &&
                    <p className="error">Email is required</p>
                }
                {
                    this.state.emailmatch===true &&
                    <p className="error">Email is invalid</p>
                }  
                <input type="email"  placeholder="Email" name="email" value={this.state.email} onChange={this.handleChange} onBlur={this.secondchange} className={(this.state.emailrequired||this.state.emailmatch) ? 'inputvalid':''} required/>
                {
                    this.state.passwordrequired===true &&
                    <p className="error">Password is required</p>
                } 
                <input type="password" name="password" placeholder="Password"value={this.state.password} onChange={this.handleChange} onBlur={this.handleChange} className={this.state.passwordrequired ? 'inputvalid':''} required/>
                {
                    this.state.confirmpasswordrequired===true &&
                    <p className="error">Confirm password is required</p>
                }
                {
                    this.state.equalpassword===true &&
                    <p className="error">Passwords don't matchup</p>
                } 
                <input type="password" name="confirmpassword" placeholder="Confirm password" value={this.state.confirmpassword} onChange={this.secondchange} onBlur={this.secondchange} className={(this.state.confirmpasswordrequired || this.state.equalpassword) ? 'inputvalid':''} required/>
                <input type="submit" value="Submit" />
            </form>
        );
    }
}
export default SignUp;