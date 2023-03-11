// import CartItem from "./CartItem";
// import { useSelector } from "react-redux";
// import { getCartItems, getTotalPrice } from "../../Redux/cartSlice";


// const Cart =()=>{
//     const cartItems=useSelector(getCartItems);    
//     const totalPrice=useSelector(getTotalPrice);
//     return(<div>
//                <img className="cartIcon" src="https://img.icons8.com/external-xnimrodx-lineal-color-xnimrodx/64/000000/external-shopping-cart-cyber-monday-xnimrodx-lineal-color-xnimrodx.png"/> 
//          {/* <img className="cartIcon" src="https://icons8.com/icon/67440/shopping-cart" alt="cartIcon"/>  */}
//          <CartItem/>
//          {/* {cartItems.map((cartItem,index)=><CartItem key={index} cartItem={cartItem}/>)}
//          <h3>Total :${totalPrice}</h3> */}
        
//         </div>)

// }
// export default Cart;




import { useSelector } from "react-redux";
import { getCartItems, getTotalPrice } from "../../Redux/cartSlice";
import CartItem from "./CartItem";
import { getTotalQuantity } from "../../Redux/cartSlice";
import { Link} from "react-router-dom";
import {  useState } from "react";
import swal from 'sweetalert';
// import Swal from 'sweetalert2';



const Cart = () => {

    const cartItems = useSelector( getCartItems );
    const totalPrice = useSelector ( getTotalPrice );
    const fixedTotalPrice = totalPrice.toFixed(2)
    const totalQuantity = useSelector ( getTotalQuantity )


    const [value, setValue] = useState("");
    const [discount,setDiscount]=useState(0);

    
    function changeValue(e) {
        setValue(e.target.value.toUpperCase());     
    }

    function submitValue(e) {
        addPromo()
        e.preventDefault();
    }

    const addPromo = () => {
        if (value === "LUCK") {
            setDiscount(20)
        }
        else {swal("Ой!", "Промокод не правильный!", "Ошибка!");
            }
    }

    const totalWithDiscount = (totalPrice - totalPrice * (discount/100)).toFixed(2)
   

    return (
        <div className="cart-wrapper">

            <h2 className="subTitle">Корзина</h2>
            {cartItems.length === 0 ? (
                <div className="empty-cart-box">
                    <h4 className="cart-title">Your basket lacks books now. <br/>Do you feel like adding some?</h4>
                    <button className="cart-btn"><Link to="/" className='cart-link'>Продолжить покупки</Link></button>
                </div> 
                 ) : (
             <div className="cart">
                
                {cartItems.map ( 
                    (cartItem, index) => <CartItem key={index} cartItem={cartItem}/>
                )}
        
                <h3 className="total">Итого : $ {fixedTotalPrice}</h3>
            
                <h3 className="total">Итого количество : { totalQuantity } </h3> 
                <form onSubmit={submitValue} className="promo-box">
                    <input className="promo-input"  placeholder="Введите промокод..." value={value} onChange={ changeValue} />
                    <input className="promo-btn"  type="submit" value="Add"/>
                    <h3 className="total">Итого: $ {totalWithDiscount}</h3>
                </form>
        
            </div>
            )}

            
            
        </div>
    )
}



export default Cart;