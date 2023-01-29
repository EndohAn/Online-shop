
import { useState } from "react";
import {data} from "./data";
import Buttons from "./Buttons";
import Catalog from "./Catalog";


function Home(){
    const [catalogName,setCatalogName] =useState(data);
    const chosenGoods=(searchTerm) =>{
      const newCatalog = data.filter(element => element.searchTerm === searchTerm);
      setCatalogName(newCatalog);
    }
  
    return (
      <div>
      <Buttons propsFilter ={chosenGoods}/>
      <Catalog propsCatalog ={catalogName}/>   
      </div>
    )
}
export default Home;