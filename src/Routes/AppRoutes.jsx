import React from "react";
import { Route, Routes } from "react-router-dom";
import Mockman from "mockman-js";
import { Home,Cart,SingleProduct,ProductPage,Search,SignIn,SignUp,UserProfile,Wishlist,Error } from "../Pages";
import { PrivateRoute } from "../Components/PrivateRoute/PrivateRoute";

const AppRoutes = () => {
  return (
    <Routes>
       <Route path="/" element={<Home/>} />
        <Route path="/search" element={<Search/>} />
        <Route path="/cart" element={ <PrivateRoute><Cart/></PrivateRoute>} />
        <Route path="/wishlist" element={<PrivateRoute><Wishlist/></PrivateRoute>} />
        <Route path="/products" element={<ProductPage/>} />
        <Route path="/products/:productId" element={<SingleProduct/>} />
        <Route path="/signIn" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/userProfile" element={<PrivateRoute><UserProfile /></PrivateRoute>} />
        <Route path="*" element={<Error />} />


      <Route path="/mockman" element={<Mockman />} />
    </Routes>
  );
};

export default AppRoutes;
