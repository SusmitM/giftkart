
export const CartReducer=(cartState,action)=>{
  switch (action.type) {
    case "getCartData":
        return {...cartState,cart:action.payload}
    case "addToCart":
        return {...cartState,cart:action.payload}  
    case "deleteFromCart":
          return {...cartState,cart:action.payload}      
        
       

    default:
        break;
}

}

export const initialCartState={cart:[]}; 