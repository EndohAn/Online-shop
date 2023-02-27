import ChangeQuantity from "../Cart/ChangeQuantity";
import {useState} from 'react';
import { useDispatch } from "react-redux";
import { addItemToCart } from "../../Redux/cartSlice";

const Good =(Good)=>{
    const[quantity,setQuantity]=useState(1);
    const dispatch=useDispatch();
return(<div>
    <img src={`${Good.img}.jpg`} alt="good"/>
    <h2>{Good.firstName}</h2>
    <p>{Good.price}</p>
    <ChangeQuantity quantity={quantity}setQuantity={setQuantity}/>
    <button onClick ={()=>{dispatch(addItemToCart({Good,quantity}));
}}>ADD TO CART</button>
</div>)
}
export default Good;