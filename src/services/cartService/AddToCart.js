import axios from "axios";
export const AddToCart=(productData,loginToken)=>
    axios.post(
        "/api/user/cart",
        { product: productData },
        {
          headers: {
            authorization: loginToken,
          },
        }
      );
