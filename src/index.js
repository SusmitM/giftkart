import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter } from "react-router-dom";
import { DataContextProvider } from "./context/data/dataContext";
import { AuthContextProvider } from "./context/auth/authContext";
import { CartContextProvider } from "./context/auth/cartContext";


// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <DataContextProvider>
        <AuthContextProvider>
          <CartContextProvider>
          <App />
          </CartContextProvider>
           
        </AuthContextProvider>
      </DataContextProvider>
    </BrowserRouter>
 
  </React.StrictMode>,
  document.getElementById("root")
);
