import axios from "axios";
export const UpdateCartItem=(productId,loginToken,actionType)=>
axios.post(`api/user/cart/${productId}`,{
    action: {type: actionType}
  },{
    headers: {
      authorization: loginToken
    }
  })
