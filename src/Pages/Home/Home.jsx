import "./Home.css";
import { useNavigate } from "react-router-dom";
import heroBg from "../../assets/heroBg.jpg";
import { useFilterContext } from "../../context/filters/filterContext";
import { BsLinkedin, BsGithub, BsTwitter } from "react-icons/bs";

export const Home = () => {
  const navigate = useNavigate();
  const { filterDispatch } = useFilterContext();
  return (
    <>
      <div className="home-header">
        <img className="heroImage" src={heroBg} alt="hero" />
        <div className="heroText">
          <h2>Awesome Gifts</h2>
          <h2>For Your Loved Ones</h2>
          <button
            className="productsBtn"
            onClick={() => {
              filterDispatch({ type: "Clear-All" });
              navigate("/products");
            }}
          >
            Shop Now
          </button>
        </div>
      </div>
      <div className="category-container">
        <h2>Featured Categories</h2>
        <div
          className="cartoon-Category"
          onClick={() => {
            navigate("/products");
            filterDispatch({ type: "Category-Filter", payload: "Cartoon" });
          }}
        >
          <span className="Category-name">Cartoon</span>
        </div>
        <div
          className="sport-Category"
          onClick={() => {
            navigate("/products");
            filterDispatch({ type: "Category-Filter", payload: "Sport" });
          }}
        >
          <span className="Category-name">Sport</span>
        </div>
        <div
          className="modern-Category"
          onClick={() => {
            navigate("/products");
            filterDispatch({ type: "Category-Filter", payload: "Modern" });
          }}
        >
          <span className="Category-name">Modern</span>
        </div>
        <div
          className="classic-Category"
          onClick={() => {
            navigate("/products");
            filterDispatch({ type: "Category-Filter", payload: "Classic" });
          }}
        >
          <span className="Category-name">Classic</span>
        </div>
      </div>
      <section id="about" className="footer">
        <div className="socialProfiles">
        <a href="https://www.linkedin.com/in/susmit-mukherjee-5aa8211b5/" target='_blank' rel="noreferrer">
        <span onclick="window.location='your http/https link'">
            <BsLinkedin size={30} />
          </span>
        </a>
        <a href="https://github.com/SusmitM" target='_blank' rel="noreferrer">
        <span>
            <BsGithub size={30} />
          </span>
        </a>
          
          <a href="https://twitter.com/SusmitMukherje5" target='_blank' rel="noreferrer">
          <span onclick="window.location='your http/https link'">
            <BsTwitter size={30} />
          </span>
          </a>
        </div>
        <span>Developed by Susmit Mukherjee @ 2023</span>
      </section>
    </>
  );
};
