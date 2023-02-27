import { createSlice } from "@reduxjs/toolkit";


export const slice = createSlice({
    name:"cart",
    initialState:{
        cartItems:[]
    },
    reducers:{
        addItemToCart:(state,action)=>{
            const timeId=new Date().getTime()
            state.cartItems.push({
                id:timeId,                
                goodId:action.payload.good.goodId,
                quantity : action.payload.quantity,
                totalprice:action.payload.quantity*action.payload.good.price
            })
        },
        removeItemFromCart:(state,action)=>{
            state.cartItems=state.cartItems.filter(
                cartItem=>cartItem.id!==action.payload.cartItemId
            )
        }
    }
})
export const getTotalPrice=state=>{
    return state.cart.cartItems.reduce((total,cartItems)=>{
        return cartItems.totalprice+total
    },0)
}
export const{addItemToCart,removeItemFromCart}=slice.actions;
export const getCartItems =state =>state.cart.cartItems;
export const {addItemCart} =slice.actions;
export default slice.reducer;