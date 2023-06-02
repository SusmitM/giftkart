import { useContext, useReducer, useEffect,useState } from "react";
import { createContext } from "react";

import {toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import {
  WishlistReducer,
  initialWishlistState,
} from "../../reducers/WishlistReducer";
import { useAuthContext } from "../auth/authContext";
import { AddToWishlist } from "../../services/wishlistService/AddToWishlist";
import { GetWishlistData } from "../../services/wishlistService/GetWishlistData";
import { DeleteFromWishlist } from "../../services/wishlistService/DeleteFromWishlist";
const wishlistContext = createContext();

export const WishlistContextProvider = ({ children }) => {
  const { loginToken } = useAuthContext();
  const [wishlistState, wishlistDispatch] = useReducer(
    WishlistReducer,
    initialWishlistState
  );
  const [wishlistLoading,setWishlistLoading]=useState(true);

  // get Wishlist Data feature

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const getWishlistData = async () => {
    try {
      const response = await GetWishlistData(loginToken);
      if (response.status === 200) {
        wishlistDispatch({
          type: "getWishlistData",
          payload: response?.data?.wishlist,
        });
      }
    } catch (error) {
      console.error(error);
    }
  };

  //add to wishlist feature

  const addToWishlist = async (productData) => {
    try {
      const response = await AddToWishlist(productData, loginToken);
      if (response?.status === 201) {
        wishlistDispatch({
          type: "addToWishlist",
          payload: response?.data?.wishlist,
        });
        // Toast for adding item to wishlist
        toast.success("Item Added to Wishlist", {
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
      // Toast for failing to remove item from wishlist
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

  // delete item from wishlist

  const deleteFromWishlist = async (productId) => {
    try {
      const response = await DeleteFromWishlist(productId, loginToken);
      if (response?.status === 200) {
        wishlistDispatch({
          type: "deleteFromWishlist",
          payload: response?.data?.wishlist,
        });
        // Toast for removing item from wishlist
        toast.warn("Item Removed From Wishlist", {
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
      // Toast for failing to remove item from wishlist
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

  // find if the product exists in the wishlist or not

  const itemInWishlist = (productId) => {
    return wishlistState.wishlist.find((product) => product._id === productId);
  };

  //load the existing wishlist data on first render
  useEffect(() => {
    getWishlistData(localStorage.getItem("token"));
    setWishlistLoading(false);
  
  }, [getWishlistData]);

  return (
    <>
      <wishlistContext.Provider
        value={{
          wishlistState,
          addToWishlist,
          deleteFromWishlist,
          itemInWishlist,
          wishlistLoading
        }}
      >
        {children}
      </wishlistContext.Provider>
    </>
  );
};

export const useWishlistContext = () => useContext(wishlistContext);
