import React from "react";
import Home from "../home/homeindex";
import Login from '../login/loginindex';
import SignUp from '../signup/SignUpindex';
import UserProfile from '../UserProfile/UserIndex';
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import { useLocation } from "react-router-dom";
import {AnimatePresence} from 'framer-motion';
function AnimatedRoutes()
{
    const location=useLocation();
    return(
        <AnimatePresence>
            <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home/>}/>
        <Route path="thesis/Login" element={<Login/>} />
        <Route path="thesis/SignUp" element={<SignUp/>}/>
        <Route path="thesis/UserProfile" element={<UserProfile/>}/>
      </Routes>
        </AnimatePresence>
    );
}
export default AnimatedRoutes;