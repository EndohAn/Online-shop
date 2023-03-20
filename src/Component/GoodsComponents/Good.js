

import { useState } from "react"
import { useDispatch, useSelector } from "react-redux";

import ChangeQuantity from "../Cart/ChangeQuantity";
import { addItemToCart, getCartItems } from "../../Redux/cartSlice";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Good= ({good}) => {

    // const [showText, setShowText] = useState(false)
    // const showTextClick = (good) => {
    //     good.showMore = !good.showMore
    //     setShowText(!showText)
    // }

    const dispatch = useDispatch();
    const [quantity, setQuantity] = useState(1);

    const cartItems = useSelector( getCartItems  )

    const goodsInCart = cartItems.some ( item => item.id === good.id)


    const putToCart = () => {
        if (!goodsInCart) {
            dispatch (addItemToCart ( {good, quantity} )) 
            const notify = () => toast.success("Добавлено в корзину", {
                position: "top-right",
                autoClose: 1000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
            notify()
        // } else {
        //     dispatch (updateQuantity ( {good, quantity} ) )
        //     const notify = () => toast.success("Удалено из корзины", {
        //         position: "top-right",
        //         autoClose: 1000,
        //         hideProgressBar: false,
        //         closeOnClick: true,
        //         pauseOnHover: true,
        //         draggable: true,
        //         progress: undefined,
        //         theme: "light",
        //     })
        //     notify()
         }
    }


    return (       
      

        < div className="product_card">

             <div className="product_img" >
             <img src={`./${good.image  }.jpg `}width="300px" alt="good"/>
             </div>
           <div className="product_title"> 
             <h3>{good.firstName}</h3>
             <p className="price-title">{good.price} рублей</p>
              </div> 
             <div className="addLine">
             <div className="quantity">
             <ChangeQuantity quantity={quantity}setQuantity={setQuantity}/>
             <button className="  add-to-cart-btn" onClick= { putToCart } >Добавить в корзину</button>
                <ToastContainer 
                    position="top-right"
                    autoClose={1000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    theme="light"
             />
             </div>
        </div>
        <div className="line"></div>
        </div>
        // </div>
        
        )   

        
    }
export default Good;
