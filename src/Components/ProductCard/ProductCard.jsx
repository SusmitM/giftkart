import React from "react";
import Tippy from "@tippyjs/react";
import { useNavigate } from "react-router-dom";
import "./ProductCard.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faStar, faEye } from "@fortawesome/free-solid-svg-icons";
import { useCartContext } from "../../context/cart/cartContext";
import { useWishlistContext } from "../../context/wishlist/wishlistContext";

export const ProductCard = ({ productData,page }) => {
  const navigate = useNavigate();
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
    
  } = productData;

  const { addToCart, itemInCart, UpdateProductQty } = useCartContext();
  const { addToWishlist, itemInWishlist, deleteFromWishlist } =
    useWishlistContext();
  const itemPresentInCart = itemInCart(_id);
  const itemPresentInWishlist = itemInWishlist(_id);
  return (
    <div className="product-card" key={_id}>
      <span className="cardHeader" onClick={() => navigate(`/products/${_id}`)}>
        <div className="product-image-section">
          <span className="img1-container">
            {" "}
            <img
              src={img1}
              alt={`${name} img`}
              onMouseOver={(e) => {
                e.currentTarget.src = img2;
              }}
              onMouseOut={(e) => {
                e.currentTarget.src = img1;
              }}
            />
          </span>
        </div>
        <Tippy content={<span className="tooltip">Quick view</span>}>
          <div className="overlay-singleProduct">
            <FontAwesomeIcon icon={faEye} />
          </div>
        </Tippy>
      </span>
      <div className="product-details-section">
        <div className="product-name">{name}</div>

        <div className="product-rating">
          {rating}
          <span>
            {" "}
            <FontAwesomeIcon icon={faStar} style={{ color: "#ffffff" }} />
          </span>
        </div>

        <div className="product-price">
          <span className="currentPrice">₹{currentPrice}</span> ₹
          <span className="originalPrice">{originalPrice}</span>
        </div>

        
        <button
          className="add-toCart-btn"
          onClick={() =>
            itemPresentInCart ? navigate("/cart") : addToCart(productData)
          }
          style={{display : page==="wishlistPage" ? "none" :""}}
        >
          {itemPresentInCart ? "Go to Cart" : "ADD to CART"}
        </button>
        <button
          className="add-toCart-btn"
          onClick={() =>
            itemPresentInCart ?  UpdateProductQty(_id,"increment") : addToCart(productData)
          }
          style={{display : page==="wishlistPage" ? "" :"none"}}
        >
          {itemPresentInCart ? "Already in Cart" : "ADD to CART"}
        </button>
       
      </div>
      <Tippy
        content={
          <span className="tooltip">
            {itemPresentInWishlist
              ? "Remove From Wishlist"
              : "Move to Wishlist"}
          </span>
        }
      >
        <span
          className="wishlist-btn"
          role="button"
          onClick={() =>
            itemPresentInWishlist
              ? deleteFromWishlist(_id)
              : addToWishlist(productData)
          }
        >
          {itemPresentInWishlist ? (
            <FontAwesomeIcon
              icon={faHeart}
              style={{ color: "red" }}
              size="2x"
            />
          ) : (
            <FontAwesomeIcon
              icon={faHeart}
              style={{ color: "#c2c2c2" }}
              size="2x"
            />
          )}
        </span>
      </Tippy>

      {outOfStock && (
        <span className="out-of-stock-label">BACK END OF JUNE</span>
      )}
      {fastDelivery && (
        <span className="fast-delivery-label">FAST DELIVERY</span>
      )}
    </div>
  );
};
