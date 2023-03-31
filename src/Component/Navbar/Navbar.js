// import Home from "./Home";
//  import Delivery from "./Delivery";
//  import About from "./About";

// import Goods from './Component/GoodsComponents/Goods';
// import Cart from './Component/Cart/Cart';

// import './App.css';
// Style
// import Promo from './Component/Promo/Promo';

import { useSelector } from "react-redux";
import { getTotalQuantity } from "../../Redux/cartSlice";


import {

  BrowserRouter as Router,

  Routes,

  Route,

  Link

} from "react-router-dom";
import { useState } from 'react';



const Navbar =()=>{
    const totalQuantity = useSelector ( getTotalQuantity )
    const [isMobile, setIsMobile] = useState(false)

    return <div>   

    <nav className={isMobile ? "nav-links-mobile" : "nav-links"} 
    onClick={ () => setIsMobile (false)}>
     
     <Link to ="/" className='link link-mobile'> На главную </Link>
     <Link to ="/about" className='link link-mobile'> О нас </Link>
     <Link to ="/delivery" className='link link-mobile'> Доставка </Link>
     <Link to="/Cart" className='link link-mobile'> 
       <div className='basket-box'>
            <img  src= {process.env.PUBLIC_URL + "small-img/basket.png"}  alt="a basket" width="35rem"/> 
                <span className='link-number'>{totalQuantity} </span>
       </div>
     </Link>
</nav>

<div className='container'>
  <Link to="/" className='h1-default'> <h1>Матрешка</h1></Link> 
  <Link to="/Cart" className='basket-link'> 
    <div className='basket-box-mobile'>
      <img  src= {process.env.PUBLIC_URL + "small-img/basket.png"}  alt="a basket" width="23rem"/> 
      <span className='link-number'>{totalQuantity} </span>
    </div>
  </Link>
  <button className='mobile-menu-icon'
      onClick={ () => setIsMobile(!isMobile)}>
      {isMobile ? (
        <i className="fas fa-times"></i>
      ):(
        <i className="fas fa-bars"></i>
      )}
  </button>
</div>

    </div>
    
}
export default Navbar;