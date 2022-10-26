import React from "react";
import Home from "../home/homeindex.tsx";
import Login from '../login/loginindex.tsx';
import SignUp from '../signup/SignUpindex.tsx';
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
        <Route path="/" exact element={<Home/>}/>
        <Route path="thesis/Login" element={<Login/>}/>
        <Route path="thesis/SignUp" element={<SignUp/>}/>
      </Routes>
        </AnimatePresence>
    );
}
export default AnimatedRoutes;