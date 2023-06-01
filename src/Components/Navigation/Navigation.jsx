import "./Navigation.css";
import { ToastContainer, toast } from "react-toastify";
import { IoIosArrowDown } from "react-icons/io";
import { FiSearch, FiShoppingBag } from "react-icons/fi";
import { BsHeart, BsPerson, BsGift } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../../context/auth/authContext";
import { useFilterContext } from "../../context/filters/filterContext";

export const Navigation = () => {
  const navigate = useNavigate();
  const { setLoginToken } = useAuthContext();
  const {filterDispatch}=useFilterContext();
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
      <div className="nav-logo-container" onClick={() => navigate("/")}>
        <p className="nav-logo">
          <BsGift />
          GiftKart
        </p>
      </div>

      <ul className="nav-category-links" style={{ listStyle: "none" }}>
        <li className="nav-category-link"  onClick={() => {navigate("/products"); filterDispatch({ type: "Category-Filter", payload: "Cartoon" })}}>Cartoon</li>
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
        <li className="nav-link" onClick={() => navigate("/cart")}>
          <FiShoppingBag />
        </li>
        <li className="nav-link" onClick={() => navigate("/wishlist")}>
          <BsHeart />
        </li>
        <li className="nav-link" onClick={() => navigate("/userProfile")}>
          <BsPerson />
        </li>
      </ul>
      <button
        className="logOut-Btn"
        onClick={() => {
          localStorage.removeItem("token");
          setLoginToken(false);
          navigate("/");
          toast.success("Sign-out Successful", {
            position: "top-center",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
        }}
      >
        Log-Out
      </button>
    </div>
  );
};
