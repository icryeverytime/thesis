import React from "react";
import Home from "../components/homeindex";
import Login from '../components/loginindex';
import SignUp from '../components/SignUpindex';
import User from '../components/UserIndex';
import Stat from "../components/statcomponent/Statindex";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import { useLocation } from "react-router-dom";
import {AnimatePresence} from 'framer-motion';
import Barchartindex from "../components/charts/chartindex";
import Piedata from "../components/charts/piechart"
import Searchartist from "../components/charts/searchartist";
function AnimatedRoutes()
{

    const location=useLocation();
    return(
        <AnimatePresence>
            <Routes location={location} key={location.pathname}>
                <Route path="/" element={<Home/>}/>
                <Route path="thesis/Login" element={<Login/>} />
                <Route path="thesis/SignUp" element={<SignUp/>}/>
                <Route path="thesis/User/:user" element={<User/>}/>
                <Route path="thesis/Stat" element={<Stat/>}/>
                <Route path="thesis/barchart/:chart" element={<Barchartindex/>}/>
                <Route path="thesis/piechart/:chart" element={<Piedata/>}/>
                <Route path="searchartist" element={<Searchartist />}/>
            </Routes>
        </AnimatePresence>
    );
}
export default AnimatedRoutes;