import { useContext, createContext, useReducer } from "react";
import { CartReducer, initialCartState } from "../../reducers/CartReducer";
import axios from "axios";
import { useAuthContext } from "./authContext";
import { AddToCart } from "../../services/cartService/AddToCart";
import { DeleteFromCart } from "../../services/cartService/DeleteFromCart";
import { GetCartData } from "../../services/cartService/GetCartData";


const cartContext = createContext();

export const CartContextProvider = ({ children }) => {
  const { loginToken } = useAuthContext();

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [cartState, cartDispatch] = useReducer(CartReducer, initialCartState);

  // get Cart Data feature

  const getCartData = async () => {
    try {
      const response = await GetCartData(loginToken)
      if (response.status === 200) {
        cartDispatch({
          type: "getCartData",
          payload: response?.data?.cart,
        });
      }
    } catch (error) {
      console.error(error);
    }
  };

  // add To Cart feature

  const addToCart = async (productData) => {
    console.log(productData);

    try {
      const response = await AddToCart(productData,loginToken);

      if (response?.status === 201) {
        cartDispatch({
          type: "addToCart",
          payload: response?.data?.cart,
        });
      }
    } catch (error) {
      console.error(error);
    }
  };

  // delete item from cart

  const deleteFromCart= async(productId)=>{
    try{
      const response=await DeleteFromCart(productId,loginToken)
      if (response?.status === 200) {
        cartDispatch({
          type: "deleteFromCart",
          payload: response?.data?.cart,
        });
      }
    }
    catch(error){
      console.error(error);
    }
  }

  return (
    <cartContext.Provider
      value={{ cartState, addToCart, cartDispatch, getCartData,deleteFromCart }}
    >
      {children}
    </cartContext.Provider>
  );
};

export const useCartContext = () => useContext(cartContext);
