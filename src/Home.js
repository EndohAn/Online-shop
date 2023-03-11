
// import { useState } from "react";
// import data from "./Data/data";
// import Buttons from "./Buttons";
// import Catalog from "./Catalog";
// // import Quantity  from "./Quantity";
// import Good from "./Component/GoodsComponents/Good";
// import CartItem from "./Component/Cart/CartItem";



// function Home(){
//     const [catalogName,setCatalogName] =useState(data);
//     // const [quantity, setQuantity] = useState(1);
//     const chosenGoods=(searchTerm) =>{
//       const newCatalog = data.filter(element => element.searchTerm === searchTerm);
//       setCatalogName(newCatalog);
//     }
  
//     return (
      
//     <div className='App'>      
      
//       <CartItem/>   
//       <Buttons propsFilter ={chosenGoods}/>
//       {/* <Catalog propsCatalog ={catalogName}/>  */}
//       <Good Good={catalogName}/>
//       {/* <Quantity quantity={quantity} setQuantity={setQuantity}/>
//             <button  className="item__bag"  onClick={newEvent} >ADD TO BAG</button> */}

//       </div>
//     )
// }
// export default Home;



import Goods from './Component/GoodsComponents/Goods';
import AllCategories from './Component/Filter/AllCategories';

const Home = () => {
    return (
    <div>
        
            <AllCategories />  
            
                <Goods />
                      
       
    </div>
    )
}

export default Home;