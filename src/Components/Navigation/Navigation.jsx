import "./Navigation.css";
import { ToastContainer, toast } from "react-toastify";
import Tippy from "@tippyjs/react";
import { IoIosArrowDown } from "react-icons/io";
import { FaPowerOff, FaSignInAlt } from "react-icons/fa";
import { FiSearch, FiShoppingBag } from "react-icons/fi";
import { BsHeart, BsPerson, BsGift } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../../context/auth/authContext";
import { useFilterContext } from "../../context/filters/filterContext";
import { useCartContext } from "../../context/cart/cartContext";
import { useWishlistContext } from "../../context/wishlist/wishlistContext";
import { useDataContext } from "../../context/data/dataContext";

export const Navigation = () => {
  const navigate = useNavigate();
  const { loginToken, handelLogout } = useAuthContext();
  const { filterDispatch } = useFilterContext();
  const { cartSize } = useCartContext();
  const { wishlistSize } = useWishlistContext();
  const { categories, productTypes } = useDataContext();

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

      <p
        className="nav-logo"
        onClick={() => {
          navigate("/");
          filterDispatch({ type: "Clear-All" });
        }}
      >
        <BsGift />
        GiftKart
      </p>

      <ul className="nav-category-links" style={{ listStyle: "none" }}>
        {categories.map((data) =>
          data.id < 3 ? (
            <li
              key={data.id}
              className="nav-category-link"
              onClick={() => {
                filterDispatch({
                  type: "Category-Filter",
                  payload: `${data.categoryName}`,
                });
                navigate("/products");
              }}
            >
              {data.categoryName}
            </li>
          ) : (
            ""
          )
        )}

        <li className="nav-category-link" onClick={() => navigate("/products")}>
          <div className="dropdown">
            <button className="dropbtn" onClick={() => navigate("/products")}>
              All Products
              <IoIosArrowDown />
            </button>
            <div className="dropdown-content">
              {productTypes.map((product) => (
                <div
                  onClick={() => {
                    navigate("/products");
                    filterDispatch({
                      type: "ProductType-Filter",
                      payload: product,
                    });
                  }}
                >
                  {product}
                </div>
              ))}
            </div>
          </div>
        </li>

        {categories.map((data) =>
          data.id >= 3 ? (
            <li
              key={data.id}
              className="nav-category-link"
              onClick={() => {
                filterDispatch({
                  type: "Category-Filter",
                  payload: `${data.categoryName}`,
                });
                navigate("/products");
              }}
            >
              {data.categoryName}
            </li>
          ) : (
            ""
          )
        )}
      </ul>

      <ul className="nav-link-Container" style={{ listStyle: "none" }}>
        <Tippy content={<span className="tooltip">Search</span>}>
          <li className="nav-link" onClick={() => navigate("/search")}>
            <FiSearch />
          </li>
        </Tippy>

        <span onClick={() => navigate("/cart")}>
          <Tippy content={<span className="tooltip">Cart</span>}>
            <li className="nav-link">
              <FiShoppingBag />
            </li>
          </Tippy>
          <span
            style={{ display: loginToken ? "" : "none" }}
            className="cartCount"
          >
            {cartSize}
          </span>
        </span>
        <span onClick={() => navigate("/wishlist")}>
          <Tippy content={<span className="tooltip">Wishlist</span>}>
            <li className="nav-link">
              <BsHeart />
            </li>
          </Tippy>
          <span
            style={{ display: loginToken ? "" : "none" }}
            className="wishlistCount"
          >
            {wishlistSize}
          </span>
        </span>
        <span onClick={() => navigate("/userProfile")}>
          <Tippy content={<span className="tooltip">Profile</span>}>
            <li className="nav-link">
              <BsPerson />
            </li>
          </Tippy>
        </span>
      </ul>

      <span
        className="loginAction"
        onClick={() => {
          loginToken ? handelLogout() : navigate("/signin");
        }}
      >
        <Tippy
          content={
            <span className="tooltip">
              {loginToken ? "Sign-Out" : "Sign-In"}
            </span>
          }
        >
          <span> {loginToken ? <FaPowerOff /> : <FaSignInAlt />}</span>
        </Tippy>
      </span>
    </div>
  );
};
