import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useAuthContext } from "../../../context/auth/authContext";
import { useCartContext } from "../../../context/cart/cartContext";

import "./PriceCard.css";

import { useNavigate } from "react-router-dom";
export const PriceCard = ({ page, selectedAddress }) => {
  const {
    cartState,
    cartDispatch,
    TotalOriginalPrice,
    TotalCurrentPrice,
    productQty,
    TotalDiscount,
  } = useCartContext();
  const { setUserData } = useAuthContext();
  const navigate = useNavigate();

  const handelPlaceOrder = () => {
    if (selectedAddress) {
      setUserData((prev) => ({
        ...prev,
        order: [cartState.cart],
        orderAmount: TotalCurrentPrice,
        address: [selectedAddress],
      }));

      cartDispatch({ type: "clearCart" });
      // Toast for successful order placement
      toast.success("Order Placed Successfully 🎉🎉", {
        position: "top-center",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } else {
      toast.error("Select an Address to Continue", {
        position: "top-center",
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
  return (
    <div className="cart-product-priceDetail-section">
      {page === "checkoutPage" && (
        <div className="orderDetails">
          <h2>Order Details</h2>
          <hr />
          <div>
            <p>Item</p>
            <p>Quantity</p>
          </div>
          <ol>
            {cartState.cart.map(({ name, qty }) => (
              <li>
                <span className="checkout-itemName">{name}</span>
                <span className="checkout-itemQty">{qty}</span>
              </li>
            ))}
          </ol>
          <hr />
        </div>
      )}
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
          onClick={() =>
            page === "checkoutPage" ? handelPlaceOrder() : navigate("/checkout")
          }
        >
          {page === "checkoutPage" ? "Place Order" : "CheckOut"}
        </button>
      </div>
    </div>
  );
};
