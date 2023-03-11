// import data from '../../Data/data';
// import { useDispatch } from "react-redux";
// import{removeItemFromCart}from '../../Redux/cartSlice';


// const CartItem =({cartItem})=>{
//     console.log(cartItem);
//      const goods=data.find(item=>item.id===cartItem.GoodId)
//      const dispatch=useDispatch();
    // return(<div>
    //       <p>{goods.name}</p>
    //     <p>{cartItem.quantity} штук(а)</p>
    //     <p>Price:{goods.price*cartItem.quantity}</p>
    //     <span onclick ={()=>dispatch(removeItemFromCart({cartItemId:cartItem.id}))}>
    //     <img className="icon" src="https://img.icons8.com/material-outlined/48/000000/trash--v1.png" alt="icon"/> 
    //     </span>  
        
//     // </div>)
// }
// export default CartItem;





import { useDispatch } from "react-redux";
import { removeItemFromCart } from "../../Redux/cartSlice";
import { incrementQuantityInCart } from "../../Redux/cartSlice";
import { decrementQuantityInCart } from "../../Redux/cartSlice";


const CartItem = ( {cartItem} ) => {

    const dispatch = useDispatch();
    const cartItemPrice = (cartItem.price * cartItem.quantity).toFixed(2)

    
    return (
    <div>
        <div className="cart-box">
            <div className="cart-image-wrapper">
             <img className="cart-image" src={`./${cartItem.image}.jpeg`} alt=" item"/> 
            </div>

            <div className="cart-inner">
                <p className="cart-name">{cartItem.firstName}</p>
                <div className="quantity-box">
                <button className="quantity-btn " onClick={ () => dispatch(decrementQuantityInCart ( {cartItemId: cartItem.id} )) } > 
                    <img className="symbol" src= {process.env.PUBLIC_URL + "small-img/minus.png"}  alt="minus" />
                </button>
                <span className="quantity-number ">{cartItem.quantity}</span>
                <button className="quantity-btn" onClick={ () => dispatch(incrementQuantityInCart ( {cartItemId: cartItem.id}))}>
                    <img className="symbol" src= {process.env.PUBLIC_URL + "small-img/plus.png"}  alt="plus" />
                </button>
            </div>
            </div>

            <div className="cart-delete-wrapper">
            <span className="icon-box" onClick= { () => dispatch(removeItemFromCart( {cartItemId: cartItem.id} )) }>
                <img className="icon" src="https://img.icons8.com/material-outlined/48/000000/trash--v1.png" width="25rem"
                alt="icon"/>
            </span>
            </div>


            <div className="cart-price-wrapper">
            <p className="cart-price">$ {cartItemPrice}</p>
            </div>
        </div>
    </div>

    )
}

export default CartItem;
