
export const WishlistReducer=(WishlistState,action)=>{
    switch (action.type) {
      case "getWishlistData":
          return {...WishlistState,wishlist:action.payload}
      case "addToWishlist":
          return {...WishlistState,wishlist:action.payload}  
      case "deleteFromWishlist":
            return {...WishlistState,wishlist:action.payload}      
  
      default:
         return WishlistState;
  }
  
  }
  
  export const initialWishlistState={wishlist:[]}; 