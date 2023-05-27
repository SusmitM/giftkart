
export const CartReducer=(cartState,action)=>{
  switch (action.type) {
    case "getCartData":
        return {...cartState,cart:action.payload}
    case "addToCart":
        return {...cartState,cart:action.payload}  
    case "deleteFromCart":
          return {...cartState,cart:action.payload}      
        
       

    default:
       return cartState;
}

}

export const initialCartState={cart:[]}; 