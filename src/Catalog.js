import Quantity  from "./Quantity";
import { useState } from "react";

function Catalog({propsCatalog}){
    const [quantity, setQuantity] = useState(1);
    return(

       <div  className="product">
           
        {propsCatalog.map((element =>{
            const{ id,firstName,image,searchTerm,price} =element;
            return(
                
                    < div className="product_card">
                <div className="product_img">
                    <img src={image} className="image_item" alt="matryoshka"/>
                 </div>

                 <div  className="product_info">
                       
                    <h3>{firstName}</h3> 
                    <h4>{price}</h4>        
                 </div>                
                 <Quantity quantity={quantity} setQuantity={setQuantity}/>
            {/* <button  className="item__bag"  onClick={newEvent} >ADD TO BAG</button> */}


                {/* <div className="quantity">
                   < button> - </button>
                   <span> 1 </span>
                   <button> + </button>
                </div>
                <button className="product_bag">ADD TO BAG</button> */}
                </div>
            )
        }))}

    </div>
    )
}
export default Catalog;