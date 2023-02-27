import data from '../../Data/data';
import { useDispatch } from "react-redux";
import{removeItemFromCart}from '../../Redux/cartSlice';


const CartItem =({cartItem})=>{
    const goods=data.find(item=>item.id===cartItem.goodId)
    const dispatch=useDispatch();
    return(<div>
        <p>{goods.name}</p>
        <p>{cartItem.quantity} штук(а)</p>
        <p>Price:{goods.price*cartItem.quantity}</p>
        <span onclick ={()=>dispatch(removeItemFromCart({cartItemId:cartItem.id}))}>
        <img className="icon" src="https://img.icons8.com/material-outlined/48/000000/trash--v1.png" alt="icon"/> 
        </span>
        
    </div>)
}
export default CartItem;