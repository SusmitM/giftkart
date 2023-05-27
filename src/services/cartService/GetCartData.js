import axios from "axios";
export const GetCartData=(loginToken)=>
axios.get(`/api/user/cart`, {
    headers: { authorization: loginToken },
  });