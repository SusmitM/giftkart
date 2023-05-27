import axios from "axios";
export const DeleteFromCart=(productId,loginToken)=>
axios.delete(`/api/user/cart/${productId}`,{
    headers: {
      authorization: loginToken
    }
  })
