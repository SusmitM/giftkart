import { useContext, useReducer,useEffect } from "react";
import { createContext } from "react";
import { WishlistReducer, initialWishlistState } from "../../reducers/WishlistReducer";
import { useAuthContext } from "../auth/authContext";
import { AddToWishlist } from "../../services/wishlistService/AddToWishlist";
import {GetWishlistData} from "../../services/wishlistService/GetWishlistData";
import {DeleteFromWishlist} from "../../services/wishlistService/DeleteFromWishlist";
const wishlistContext=createContext();

export const WishlistContextProvider=({children})=>{
     
    const {loginToken}=useAuthContext();
    const [wishlistState,wishlistDispatch]=useReducer(WishlistReducer,initialWishlistState)

 // get Wishlist Data feature

  const getWishlistData = async () => {
    try {
      const response = await GetWishlistData(loginToken)
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
    
    const addToWishlist=async(productData)=>{
        try{
           const response= await AddToWishlist(productData,loginToken)
           if (response?.status === 201) {
            wishlistDispatch({
              type: "addToWishlist",
              payload: response?.data?.wishlist,
            });
          }
        }
        catch(error){
            console.error(error)
        }
    }

 // delete item from wishlist

 const deleteFromWishlist= async(productId)=>{
    try{
      const response=await DeleteFromWishlist(productId,loginToken)
      if (response?.status === 200) {
        wishlistDispatch({
          type: "deleteFromWishlist",
          payload: response?.data?.wishlist,
        });
      }
    }
    catch(error){
      console.error(error);
    }
  }





  //load the existing wishlist data on first render
  useEffect(()=>{
    loginToken && getWishlistData()
  },[])

    return(
        <wishlistContext.Provider value={{wishlistState,addToWishlist,deleteFromWishlist}}>
            {children}
        </wishlistContext.Provider>
    )
}

export const useWishlistContext=()=>useContext(wishlistContext);