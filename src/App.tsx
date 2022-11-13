import './App.css';
import React, { useState } from "react";
import Footer from './components/footer';
import {HashRouter} from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './redux/app/store';
import AnimatedRoutes from './animatedroutes/AnimatedRoutes';
import Navbar from './components/navindex';

function App() {

  return (
    <Provider store={store}>
      <HashRouter>
      <Navbar />

      <AnimatedRoutes />

      <Footer/>
    </HashRouter>
    </Provider>
  );
}
export default App; 