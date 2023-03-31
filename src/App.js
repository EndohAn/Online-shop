
import Home from "./Home";
 import Delivery from "./Delivery";
 import About from "./About";

import Cart from './Component/Cart/Cart';
import './App.css';
// Style
import Promo from './Component/Promo/Promo';

import Navbar from "./Component/Navbar/Navbar";




import {

  BrowserRouter as Router,

  Routes,

  Route,

  

} from "react-router-dom";
// import { useState } from 'react';




function App() {

  

  return (
    <div>      
       <Promo /> 

        <Router>        
            <Navbar/>

    <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/about" element={<About/>}/>
    <Route path="/delivery" element={<Delivery/>}/>      
    <Route path="/Cart" element={<Cart/>}/>
    </Routes>
  </Router>

    

    </div>
  );
}

export default App;
