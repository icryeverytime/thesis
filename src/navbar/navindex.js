import React from 'react';
import './nav.css';
import {NavLink} from 'react-router-dom';

class Navbar extends React.Component{
    render()
    {
        return(
                <nav>
                    <ul><NavLink activeclassname="activo" to="/" exact="true">
                        <li>
                           Home
                        </li>
                        </NavLink> 
                        <NavLink activeclassname="activo" to="/Login">
                        <li>
                            Login
                        </li>
                        </NavLink>
                        <NavLink activeclassname="activo" to="/SignUp">
                        <li>
                            Sign up
                        </li>
                        </NavLink>
                    </ul>
                </nav>
        );
    }
}
export default Navbar;