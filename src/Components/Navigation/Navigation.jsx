import "./Navigation.css";
import { ToastContainer, toast } from "react-toastify";
import { IoIosArrowDown } from "react-icons/io";
import { FiSearch, FiShoppingBag } from "react-icons/fi";
import { BsHeart, BsPerson, BsGift } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../../context/auth/authContext";

export const Navigation = () => {
  const navigate = useNavigate();
  const { setLoginToken } = useAuthContext();
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
        <li className="nav-category-link">Cartoon</li>
        <li className="nav-category-link">Sports</li>
        <li className="nav-category-link">
          <div className="dropdown">
            <button className="dropbtn" onClick={() => navigate("/products")}>
              All Products
              <IoIosArrowDown />
            </button>
            <div className="dropdown-content">
              <a href="#">Mugs</a>
              <a href="#">Frames</a>
              <a href="#">Magnets</a>
              <a href="#">Lamps</a>
            </div>
          </div>
        </li>
        <li className="nav-category-link">Modern</li>
        <li className="nav-category-link">Classic</li>
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
