import React from "react";
import { Route, Routes } from "react-router-dom";
import Mockman from "mockman-js";
import { Home,Cart,Product,ProductPage,Search,SignIn,SignOut,UserProfile,Wishlist,Error } from "../Pages";

const AppRoutes = () => {
  return (
    <Routes>
       <Route path="/" element={<Home/>} />
        <Route path="/search" element={<Search/>} />
        <Route path="/cart" element={<Cart/>} />
        <Route path="/wishlist" element={<Wishlist/>} />
        <Route path="/products" element={<Product/>} />
        <Route path="/products/:productId" element={<ProductPage/>} />
        <Route path="/signIn" element={<SignIn />} />
        <Route path="/signOut" element={<SignOut />} />
        <Route path="/userProfile" element={<UserProfile />} />
        <Route path="*" element={<Error />} />


      <Route path="/mockman" element={<Mockman />} />
    </Routes>
  );
};

export default AppRoutes;
