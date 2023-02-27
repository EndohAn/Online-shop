import CartItem from "./CartItem";
import { useSelector } from "react-redux";
import { getCartItems, getTotalPrice } from "../../Redux/cartSlice";


const Cart =()=>{
    const cartItems=useSelector(getCartItems);
    const totalPrice=useSelector(getTotalPrice);
    return(<div>
         <img className="cartIcon" src="https://icons8.com/icon/67440/shopping-cart" alt="cartIcon"/> 
         {cartItems.map((cartItem,index)=><CartItem key={index} cartItem={cartItem}/>)}
         <h3>Total :${totalPrice}</h3>
        
        </div>)

}
export default Cart;