


import { useSelector } from "react-redux";
import { getCartItems, getTotalPrice } from "../../Redux/cartSlice";
import CartItem from "./CartItem";
import { getTotalQuantity } from "../../Redux/cartSlice";
import { Link} from "react-router-dom";
import {  useState } from "react";
import swal from 'sweetalert';


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
        else {swal("Ошибка!", "вы ввели неправильный промокод!");
            }
    }

    const totalWithDiscount = (totalPrice - totalPrice * (discount/100)).toFixed(2)
   

    return (
        <div className="cart-wrapper">

            <h2 className="subTitle">Ваша корзина</h2>
            {cartItems.length === 0 ? (
                <div className="empty-cart-box">
                    <h4 className="cart-title">Ваша корзина пуста</h4>
                    <button className="cart-btn"><Link to="/" className='cart-link'>Продолжить покупки</Link></button>
                </div>
                    
            ) : (
             <div className="cart">
                
                {cartItems.map ( 
                    (cartItem, index) => <CartItem key={index} cartItem={cartItem}/>
                )}
        
                <h3 className="total">Subtotal: $ {fixedTotalPrice}</h3>
                <h3 className="total">Total number of items: { totalQuantity } </h3> 
                <form onSubmit={submitValue} className="promo-box">
                    <input className="promo-input"  placeholder="Введите промокод..." value={value} onChange={ changeValue} />
                    <input className="promo-btn"  type="submit" value="Add"/>
                    <h3 className="total">Total: $ {totalWithDiscount}</h3>
                </form>
        
            </div>
            )}

            
            
        </div>
    )
}



export default Cart;