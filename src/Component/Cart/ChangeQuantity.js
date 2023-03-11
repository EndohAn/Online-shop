// const ChangeQuantity =({quantity,setQuantity})=>{
//     const addQuantity=()=>{
//         const newQuantity=quantity+1;
//         setQuantity(newQuantity)
//     }
//     const removeQuantity=()=>{
//         if(quantity<=1)return;
//         const newQuantity=quantity-1;
//         setQuantity(newQuantity)

//     }
// return(
//     <div className="quantity" >
//         <button onClick ={addQuantity}> + </button>
//         <span>{quantity}</span>
//         <button onClick={removeQuantity}> - </button>
//         </div>
// )
// }
// export default ChangeQuantity;

const ChangeQuantity = ({ quantity, setQuantity}) => {

    const addQuantity = () => {
        const newQuantity = quantity + 1;
        setQuantity(newQuantity)
    }

    const reduceQuantity = () => {
        if (quantity <= 1) return

        const newQuantity = quantity - 1;
        setQuantity(newQuantity);
    }

    return (
              
            <div className="quantity" > 
            <button className="quantity-btn" onClick={ reduceQuantity }> 
                <img className="symbol-quantity-book"  src= {process.env.PUBLIC_URL + "small-img/minus.png"}  alt="minus" />
            </button>
            <span className=" span-quantity">{quantity}</span>
            <button className="quantity-btn" onClick={ addQuantity }>
                <img className="symbol-quantity-book"   src= {process.env.PUBLIC_URL + "small-img/plus.png"}  alt="plus"/>
            </button>
        </div>
    )
}

export default ChangeQuantity;