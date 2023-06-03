import "./Navigation.css";
import { ToastContainer, toast } from "react-toastify";
import { IoIosArrowDown } from "react-icons/io";
import {FaPowerOff,FaSignInAlt} from "react-icons/fa";
import { FiSearch, FiShoppingBag } from "react-icons/fi";
import { BsHeart, BsPerson, BsGift } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../../context/auth/authContext";
import { useFilterContext } from "../../context/filters/filterContext";
import { useCartContext } from "../../context/cart/cartContext";
import { useWishlistContext } from "../../context/wishlist/wishlistContext";

export const Navigation = () => {
  const navigate = useNavigate();
  const {loginToken,handelLogout } = useAuthContext();
  const {filterDispatch}=useFilterContext();
  const{cartSize}=useCartContext();
  const{ wishlistSize}=useWishlistContext();
  
  return (
    <div className="navigation">
      <ToastContainer
        position="top-center"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
     
        <p className="nav-logo" onClick={()=>navigate("/")}>
          <BsGift />
          GiftKart
        </p>
      

      <ul className="nav-category-links" style={{ listStyle: "none" }}>
        <li className="nav-category-link"  onClick={() => { filterDispatch({ type: "Category-Filter", payload: "Cartoon" });navigate("/products");}}>Cartoon</li>
        <li className="nav-category-link" onClick={() => {navigate("/products"); filterDispatch({ type: "Category-Filter", payload: "Sport" })}}>Sports</li>
        <li className="nav-category-link"  onClick={() => navigate("/products")}>
          <div className="dropdown">
            <button className="dropbtn" onClick={() => navigate("/products")}>
              All Products
              <IoIosArrowDown />
            </button>
            <div className="dropdown-content">
              <div onClick={() => {navigate("/products"); filterDispatch({ type: "ProductType-Filter", payload: "Mugs" })}} >Mugs</div>
              <div  onClick={() => {navigate("/products"); filterDispatch({ type: "ProductType-Filter", payload: "Frames" })}}>Frames</div>
              <div  onClick={() => {navigate("/products"); filterDispatch({ type: "ProductType-Filter", payload: "Magnets" })}}>Magnets</div>
              <div  onClick={() => {navigate("/products"); filterDispatch({ type: "ProductType-Filter", payload: "Lamps" })}}>Lamps</div>
            </div>
          </div>
        </li>
        <li className="nav-category-link"  onClick={() => {navigate("/products"); filterDispatch({ type: "Category-Filter", payload: "Modern" })}}>Modern</li>
        <li className="nav-category-link"  onClick={() => {navigate("/products"); filterDispatch({ type: "Category-Filter", payload: "Classic" })}}>Classic</li>
      </ul>

      <ul className="nav-link-Container" style={{ listStyle: "none" }}>
        <li className="nav-link" onClick={() => navigate("/search")}>
          <FiSearch />
        </li>
        <span onClick={() => navigate("/cart")}>
        <li className="nav-link" >
          <FiShoppingBag />
        </li>
        <span className="cartCount">{cartSize}</span>
        </span>
       <span  onClick={() => navigate("/wishlist")}>
       <li className="nav-link">
          <BsHeart />
        </li>
        <span  className="wishlistCount">{wishlistSize}</span>
        
       </span>
        <li className="nav-link" onClick={() => navigate("/userProfile")}>
          <BsPerson />
        </li>
      </ul>
      <span className="loginAction" onClick={()=>{loginToken ? handelLogout():navigate("/signin") }}>{loginToken ?  <FaPowerOff/> :<FaSignInAlt />}</span>
    </div>
  );
};
