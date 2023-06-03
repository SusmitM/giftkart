
import { useNavigate } from "react-router-dom";
import { useCartContext } from "../../../context/cart/cartContext";
import { useWishlistContext } from "../../../context/wishlist/wishlistContext";
import "./CartItem.css";
export const CartItem = ({ productData }) => {
  const {
    _id,
    img1,
    img2,
    name,
    currentPrice,
    originalPrice,
    outOfStock,
    product,
    rating,
    category,
    fastDelivery,
    qty,
  } = productData;
  const { deleteFromCart, UpdateProductQty,} =
    useCartContext();
    const {itemInWishlist, addToWishlist } = useWishlistContext()
    const ItemPresentInWishlist=itemInWishlist(_id);
    const navigate=useNavigate();

    const moveToWishlsit=()=>{
      addToWishlist(productData);
      deleteFromCart(_id);

    }

  return (
    <div className="cartItem-container">
      <div className="cartItem-image-section">
        <img src={img1} alt={name} />
      </div>
      <div className="cartItem-details-section">
        <div className="cartItem-title">{name}</div>
        <div className="cartItem-category">Category: {category}</div>
        <div className="cartItem-priceBox">
          <span className="currentPrice">₹{currentPrice}</span>
          <span className="originalPrice">₹{originalPrice}</span>
        </div>
        <div className="cartItem-quantityBox">
          <button className="decrementBtn" onClick={()=> UpdateProductQty(_id,"decrement")} disabled={qty===1} >-</button>
          <span className="quantityBox"> {qty}</span>
          <button className="incrementBtn"  onClick={()=> UpdateProductQty(_id,"increment")}>+</button>
        </div>
      </div>
      
      <div className="cartItem-action-section">
        <button className="remove-cartItemBtn" onClick={()=>deleteFromCart(_id)}>Remove</button>
        <button className="moveToWishlistBtn" onClick={()=>ItemPresentInWishlist ? navigate("/wishlist") : moveToWishlsit()  }>{ItemPresentInWishlist ? "Already in Wishlist": "Move To Wishlist"}</button>
      </div>
    </div>
  );
};
