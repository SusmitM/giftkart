import React from "react";
import "./Filters.css";
export const Filters = ({toggleFilterDisplay}) => {
  return (
    <div className="filter-box">

      <div className="filter-container">
      <div className="filter-heading">
        <span className="label">Filters:</span>
        <button className="clearBtn">CLEAR ALL</button>
        <hr />
      </div>

      <div className="price-sort-filter">
        <span className="filter-title">Sort By :</span>
        <div className="LtH-radio">
        <label>
          <input type="radio" name="radio-price" value="LtH" />
          Price - Low to High</label>
        </div>

        <div className="HtL-radio">
        <label>
          <input type="radio" name="radio-price" value="LtH" />
          Price - High to Low</label>
        </div>
        <hr/>
      </div>

      <div className="price-range-filter">
        <span className="filter-title">Price :</span>
        <div className="slidecontainer">
      <input type="range" min="100" max="1000" value="500" className="slider"/>
      </div>
        <hr/>
      </div>
      <div className="category-filter">
        <span className="filter-title">Categories :</span>
        <div className="category-value-container" style={{display:"flex",flexDirection:"column"}}>
          <label>
            <input type="checkbox" value="sport" name="sport" />
            Sport
          </label>
          <label>
            <input type="checkbox" value="cartoon" name="cartoon" />
            Cartoon
          </label>
          <label>
            <input type="checkbox" value="modern" name="modern" />
            Modern
          </label>
          <label>
            <input type="checkbox" value="classic" name="classic" />
            Classic
          </label>
     
      </div>
        <hr/>
      </div>

      <div className="availability-filter">
        <span className="filter-title">Availability :</span>
       
        <div className="availability-value-container" style={{display:"flex",flexDirection:"column"}}>
          <label>
            <input type="checkbox" value="outOfStock" name="outOfStock" />
            Out of Stock
          </label>
          <label>
            <input type="checkbox" value="fastDelivery" name="fastDelivery" />
            Fast Delivery
          </label>
     
      </div>
        <hr/>
      </div>

      <div className="prodType-filter">
        <span className="filter-title">Type Of :</span>
        <div className="prodType-value-container" style={{display:"flex",flexDirection:"column"}}>
          <label>
            <input type="checkbox" value="mug" name="mug" />
            Mugs
          </label>
          <label>
            <input type="checkbox" value="frame" name="frame" />
            Frames
          </label>
          <label>
            <input type="checkbox" value="magnets" name="magnets" />
            Magnets
          </label>
          <label>
            <input type="checkbox" value="lamps" name="lamps" />
            Lamps
          </label>
     
      </div>
        <hr/>
      </div>

      <div className="rating-sort-filter">
        <span className="filter-title">CUSTOMER RATINGS :</span>
        <div className="4Star-radio">
        <label>
          <input type="radio" name="radio-rating" value="4" />
          4★ & above</label>
        </div>

        <div className="3Star-radio">
        <label>
          <input type="radio" name="radio-rating" value="3" />
          3★ & above</label>
        </div>
        <hr/>
      </div>

      </div>
      <button className="closeBtn" onClick={toggleFilterDisplay}>Close</button>





    </div>
  );
};
