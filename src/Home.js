
import { useState } from "react";
import data from "./Data/data";
import Buttons from "./Buttons";
import Catalog from "./Catalog";
// import Quantity  from "./Quantity";



function Home(){
    const [catalogName,setCatalogName] =useState(data);
    // const [quantity, setQuantity] = useState(1);
    const chosenGoods=(searchTerm) =>{
      const newCatalog = data.filter(element => element.searchTerm === searchTerm);
      setCatalogName(newCatalog);
    }
  
    return (
      <div>
      <Buttons propsFilter ={chosenGoods}/>
      <Catalog propsCatalog ={catalogName}/> 
      {/* <Quantity quantity={quantity} setQuantity={setQuantity}/>
            <button  className="item__bag"  onClick={newEvent} >ADD TO BAG</button> */}

      </div>
    )
}
export default Home;