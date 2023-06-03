import {
  useEffect,
  useContext,
  createContext,
  useReducer,
  useState,
} from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { CartReducer, initialCartState } from "../../reducers/CartReducer";
import { useAuthContext } from "../auth/authContext";
import { AddToCart } from "../../services/cartService/AddToCart";
import { DeleteFromCart } from "../../services/cartService/DeleteFromCart";
import { GetCartData } from "../../services/cartService/GetCartData";
import { UpdateCartItem } from "../../services/cartService/UpdateCartItem";

const cartContext = createContext();

export const CartContextProvider = ({ children }) => {
  const { loginToken } = useAuthContext();

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [cartState, cartDispatch] = useReducer(CartReducer, initialCartState);
  const [cartLoading, setCartLoading] = useState(true);

  // get Cart Data feature

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const getCartData = async () => {
    try {
      const response = await GetCartData(loginToken);
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
    try {
      const response = await AddToCart(productData, loginToken);

      if (response?.status === 201) {
        cartDispatch({
          type: "addToCart",
          payload: response?.data?.cart,
        });
        // Toast for adding item to cart
        toast.success("Item Added to Cart", {
          position: "top-left",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      }
    } catch (error) {
      console.error(error);
      // Toast for failing to add item to cart
      toast.error("Unable to add item", {
        position: "top-left",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  };

  // delete item from cart

  const deleteFromCart = async (productId) => {
    try {
      const response = await DeleteFromCart(productId, loginToken);
      if (response?.status === 200) {
        cartDispatch({
          type: "deleteFromCart",
          payload: response?.data?.cart,
        });
        // Toast for removing item from cart
        toast.warn("Item Removed From cart", {
          position: "top-left",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      }
    } catch (error) {
      console.error(error);
      // Toast for failing to remove item from cart
      toast.error("Unable to remove item", {
        position: "top-left",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  };

  // Update product count

  const UpdateProductQty = async (productId, actionType) => {
    try {
      const response = await UpdateCartItem(productId, loginToken, actionType);

      if (response?.status === 200) {
        cartDispatch({
          type: "updateCartQty",
          payload: response?.data?.cart,
        });
        // Toast for updating cart quantity
        toast.success(
          `Successfully ${
            actionType === "increment" ? "increased" : "decreased"
          } item quantity`,
          {
            position: "top-left",
            autoClose: 1000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          }
        );
      }
    } catch (error) {
      console.error(error);
      // Toast for failing to update cart quantity
      toast.error(`Unable to ${actionType} item quantity`, {
        position: "top-left",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  };
  
  //function to clear the cart
  const clearCart=()=>{
   cartState.cart.map(item=>deleteFromCart(item._id))

    }
    


  // function to find if an item is in cart or not
  const itemInCart = (productId) => {
    return cartState.cart.find((product) => product._id === productId);
  };

  // cart size
  const cartSize = cartState.cart.length;

  // total products in cart

  const productQty = cartState.cart.reduce((acc, crr) => acc + crr.qty, 0);

  // Total original price

  const TotalOriginalPrice = cartState.cart.reduce(
    (acc, crr) => acc + crr.originalPrice * crr.qty,
    0
  );

  // Total current price

  const TotalCurrentPrice = cartState.cart.reduce(
    (acc, crr) => acc + crr.currentPrice * crr.qty,
    0
  );
  // Total Discount
  const TotalDiscount = TotalOriginalPrice - TotalCurrentPrice;

  //load the existing cart data on first render
  useEffect(() => {
    getCartData(localStorage.getItem("token"));
    setCartLoading(false);
  }, [getCartData]);

  return (
    <cartContext.Provider
      value={{
        cartState,
        cartLoading,
        addToCart,
        getCartData,
        cartDispatch,
        deleteFromCart,
        itemInCart,
        UpdateProductQty,
        TotalOriginalPrice,
        TotalCurrentPrice,
        productQty,
        TotalDiscount,
        cartSize,
        clearCart
      }}
    >
      {children}
    </cartContext.Provider>
  );
};

export const useCartContext = () => useContext(cartContext);
