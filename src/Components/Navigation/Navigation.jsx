import "./Navigation.css";

import {IoIosArrowDown} from 'react-icons/io';
import { FiSearch,FiShoppingBag} from 'react-icons/fi';
import { BsHeart,BsPerson,BsGift} from 'react-icons/bs';
import { useNavigate } from "react-router-dom";


const Navigation = () => {
  const navigate=useNavigate();
 
  return (
    <div className="navigation">
      <div className="nav-logo-container" onClick={()=>navigate("/")} ><p  className="nav-logo"><BsGift/>GiftKart</p></div>
      
      <ul className="nav-category-links" style={{listStyle:"none"}}>
      <li className="nav-category-link">Cartoon</li>
        <li className="nav-category-link">Sports</li>
        <li className="nav-category-link">
          <div class="dropdown">
    <button class="dropbtn">All Products<IoIosArrowDown/></button>
    <div class="dropdown-content">
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
      
      
      <ul className="nav-link-Container" style={{listStyle:"none"}}>
        <li className="nav-link" onClick={()=>navigate("/search")}><FiSearch/></li>
        <li className="nav-link" onClick={()=>navigate("/cart")}><FiShoppingBag/></li>
        <li className="nav-link" onClick={()=>navigate("/wishlist")}><BsHeart/></li>
        <li className="nav-link" onClick={()=>navigate("/userProfile")}><BsPerson/></li>
      </ul>
    </div>
  )
}

export default Navigation
