import axios from "axios";
export const DeleteFromWishlist=(productId,loginToken)=>
axios.delete(`/api/user/wishlist/${productId}`,{
    headers: {
      authorization: loginToken
    }
  })
