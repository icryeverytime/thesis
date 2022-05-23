import React from 'react';
import './nav.css';
import {NavLink} from 'react-router-dom';

class Navbar extends React.Component{
    constructor(props){
        super(props);
        this.display=this.display.bind(this);
        this.nodisplay=this.nodisplay.bind(this);
    }
    display(){
        var three=document.getElementById('threebars');
        var form=document.getElementById('navbusca');
        var input1=document.getElementById('input2');
        var home=document.getElementById('home');
        var login=document.getElementById('login');
        var sign=document.getElementById('signup');
        var x=document.getElementById('x');
        three.className="nonresponsive";
        x.className="responsive";   
        form.className="responsive";
        input1.className="responsive";
        home.className="responsive";
        login.className="right responsive";
        sign.className="right responsive";
    }
    nodisplay()
    {
        var three=document.getElementById('threebars');
        var form=document.getElementById('navbusca');
        var input1=document.getElementById('input2');
        var home=document.getElementById('home');
        var login=document.getElementById('login');
        var sign=document.getElementById('signup');
        var x=document.getElementById('x');
        three.className="responsive";
        x.className="nonresponsive";   
        form.className="nonresponsive";
        input1.className="nonresponsive";
        home.className="nonresponsive";
        login.className="right nonresponsive";
        sign.className="right nonresponsive";
    }
    render()
    {
        return(
                <nav>
                    <ul>
                    <a id="threebars" className='responsive' onClick={this.display}>Three</a>
                    <a id="x" className='nonresponsive' onClick={this.nodisplay}>X</a>
                    <NavLink id="home" className="nonresponsive" activeclassname="active" to="/" exact="true" onClick={this.nodisplay}>
                           Home
                        </NavLink> 
                        <form id='navbusca' className='nonresponsive'>
                            <input id="input2" type='text' placeholder='Search'></input>
                            <input id="inputsubmit" type="submit" value="Search"/>
                        </form>
                        <NavLink id="login" className='right nonresponsive' activeclassname="active" to="/Login" onClick={this.nodisplay}>
                            Login
                        </NavLink>
                        <NavLink  id="signup" className="right nonresponsive" activeclassname="active" to="/SignUp" onClick={this.nodisplay}>
                            Sign up
                        </NavLink>
                    </ul>
                </nav>
        );
    }
}
export default Navbar;