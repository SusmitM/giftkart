import axios from "axios";
export const AddToWishlist=(productData,loginToken)=>
    axios.post(
        "/api/user/wishlist",
        { product: productData },
        {
          headers: {
            authorization: loginToken,
          },
        }
      );
