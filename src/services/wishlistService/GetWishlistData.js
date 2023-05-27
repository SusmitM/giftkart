import axios from "axios";
export const GetWishlistData=(loginToken)=>
axios.get(`/api/user/wishlist`, {
    headers: { authorization: loginToken },
  });