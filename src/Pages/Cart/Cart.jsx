import "./Cart.css";
import { useCartContext } from "../../context/cart/cartContext";
import { useAuthContext } from "../../context/auth/authContext";
import { useEffect } from "react";
import { initialCartState } from "../../reducers/CartReducer";
import { CartItem } from "./components/CartItem";

export const Cart = () => {
  const { cartState, deleteFromCart,TotalOriginalPrice,
    TotalCurrentPrice,
    productQty,TotalDiscount } = useCartContext();
    console.log(cartState.cart)

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
        <div className="cart-product-priceDetail-section">
          <h2>Price Details</h2>
          <hr />
          <div className="price-calculate-content">
            <div>
              <p>Price ({productQty} items)</p>
              <p>₹ {TotalOriginalPrice}</p>
            </div>
            <div>
              <p>Discount</p>
              <p> - ₹{TotalDiscount}</p>
            </div>
            <div>
              <p>Delivery Charges</p>
              <p>FREE</p>
            </div>
            <div>
              <p>Shipping Charges</p>
              <p>FREE</p>
            </div>
            <hr />
            <div>
              <h3>Total Amount</h3>
              <h3>₹ {TotalCurrentPrice}</h3>
            </div>
            <hr />
            <p className="save-msg">
              You will save ₹ {TotalDiscount} on this order
            </p>
            <button
              className="checkout-btn"
             
            >
              Checkout
            </button>
          </div>
        </div>
      </div>}
    </>
  );
};
