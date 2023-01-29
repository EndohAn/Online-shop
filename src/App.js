import React from 'react';
import './App.css';
import image from'./matryoshka.jpg';
import{
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';

import Catalog from "./Catalog";
import Home from "./Home";
import Delivery from "./Delivery";
import About from "./About";


function App() {
  return  <Router>
    <nav>      
      <img src={image }width="60px" alt="logo"/>      
      <Link to ="/" className='link'> Home </Link>
      <Link to ="/about" className='link'> About Us </Link>
      <Link to ="/delivery" className='link'> Delivery </Link>
    </nav>

  <Routes>

  <Route path="/" element={<Home/>}/>
  <Route path="/about" element={<About/>}/>
  <Route path="/delivery" element={<Delivery/>}/>

  </Routes>
  </Router>
}

export default App;
