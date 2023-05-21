import React from 'react'
import "./SingleProductCard.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faStar,faTriangleExclamation,faTag,faAnchor,faCartShopping,faHeart} from "@fortawesome/free-solid-svg-icons";


export const SingleProductCard = ({selectedProduct}) => {
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
  } = selectedProduct;

  const print=()=>{
    console.log("sfsa")
  }
  return (
   <>
   <div className="card-container">
    <div className="image-section">
      <img src={img1} alt={name} />
    </div>
    <div className="details-section">
      <div className="product-title">{name}</div>
      <div className="SingleProduct-rating">{rating} <FontAwesomeIcon icon={faStar} style={{color:"#ffdc1f"}} /></div>
      <div className="SingleProduct-price">
        <span className="currentPrice">₹{currentPrice}</span> <span className="originalPrice">₹{originalPrice}</span>
      </div>
      <div className="categoryLabel"><FontAwesomeIcon icon={faAnchor} style={{color:"dimgray"}} /> Theme: {category}</div>
      {outOfStock && <span className="outOfStockLabel"><FontAwesomeIcon icon={faTriangleExclamation} style={{color:"red"}} /> Out Of Stock</span>
      }
      <div className="line"></div>
      {fastDelivery && <div className='fastDeliveryLabel'> <FontAwesomeIcon icon={faTag} style={{color:"#ff7410"}} /> Fastest Delivery</div>}
      <div className="featureLabel"> <FontAwesomeIcon icon={faTag} style={{color:"#ff7410"}} /> Inclusive of All Taxes</div>
      <div className="featureLabel"><FontAwesomeIcon icon={faTag} style={{color:"#ff7410"}} /> Cash On Delivery Available</div>
      <div className="descriptionLabel">Description</div>
      <p className="productDescription">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      <div className="buttonContainer">
        <button className="addToCart"  disabled={outOfStock ? true: false} onClick={()=> print()}><FontAwesomeIcon icon={faCartShopping} /> Add to Cart</button>
        <button className="addToWishlist"> <FontAwesomeIcon icon={faHeart} /> Add to Wishlist</button>
      </div>

    </div>
   </div>
   </>
  )
}
