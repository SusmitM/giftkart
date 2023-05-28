import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter } from "react-router-dom";
import { DataContextProvider } from "./context/data/dataContext";
import { AuthContextProvider } from "./context/auth/authContext";
import { CartContextProvider } from "./context/cart/cartContext";
import { WishlistContextProvider } from "./context/wishlist/wishlistContext";
import { FilterContextProvider } from "./context/filters/filterContext";


// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
  <BrowserRouter>
    <DataContextProvider>
      <FilterContextProvider >
        <AuthContextProvider>
          <CartContextProvider>
           <WishlistContextProvider>
             <App />
            </WishlistContextProvider>
          </CartContextProvider>
        </AuthContextProvider>
      </FilterContextProvider>
    </DataContextProvider>
  </BrowserRouter>
 
  </React.StrictMode>,
  document.getElementById("root")
);
