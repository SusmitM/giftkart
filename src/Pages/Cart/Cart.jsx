import "./Cart.css";
import { useCartContext } from "../../context/cart/cartContext";
import { useAuthContext } from "../../context/auth/authContext";
import { useEffect } from "react";
import { initialCartState } from "../../reducers/CartReducer";
import { CartItem } from "./components/CartItem";
import { useNavigate } from "react-router-dom";
import { PriceCard } from "./components/PriceCard";

export const Cart = () => {
  const { cartState, deleteFromCart,TotalOriginalPrice,
    TotalCurrentPrice,
    productQty,TotalDiscount } = useCartContext();
    const navigate=useNavigate();

  return (
    <>
      <div className="cartPage-title">My Cart ({productQty})</div>
      {cartState.cart.length===0 && <h2> Cart is Empty</h2>}
      {cartState.cart.length>0 &&  <div className="cart-container">
        <div className="cart-product-section">
          <ul>
            {cartState.cart.map((product) => {
              return <CartItem key={product._id} productData={product} />;
            })}
          </ul>
        </div>
        <PriceCard/>
        
      </div>}
    </>
  );
};
