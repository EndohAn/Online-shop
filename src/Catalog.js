function Catalog({propsCatalog}){
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
                </div>
                
            )
        }))}
          
          </div>
    )
}
export default Catalog;