import "./Filters.css";
import { useState } from "react";
import { useFilterContext } from "../../context/filters/filterContext.jsx";
import { useDataContext } from "../../context/data/dataContext";
export const Filters = ({ toggleFilterDisplay }) => {
  const { filterDispatch, filterState } = useFilterContext();
  const {
    Sort,
    PriceRange,
    Category,
    ProductType,
    OutOfStock,
    FastDelivery,
    Rating,
  } = filterState;
  
  const{categories,productTypes}=useDataContext();

  // function to change the filterState values
  const clearAll = () => {
    filterDispatch({ type: "Clear-All" });
  };

  const sortFilter = (sortType) => {
    filterDispatch({ type: "Sort-Filter", payload: sortType });
  };
  const ratingFilter = (rating) => {
    filterDispatch({ type: "Rating-Filter", payload: rating });
  };
  
  const priceFilter = (e) => {
    filterDispatch({ type: "Price-Filter", payload: e.target.value });
  };
  const categoryFilter = (genre) => {
    filterDispatch({ type: "Category-Filter", payload: genre });
  };
  const productTypeFilter = (productType) => {
    filterDispatch({ type: "ProductType-Filter", payload: productType });
  };

  const toggleOutOfStock = () => {
    filterDispatch({ type: "Toggle-OutOfStock" });
  };
  const toggleFastDelivery = () => {
    filterDispatch({ type: "Toggle-FastDelivery" });
  };
  return (
    <div className="filter-box">
      <div className="filter-container">
        <div className="filter-heading">
          <span className="label">Filters:</span>
          <button
            className="clearBtn"
            onClick={() => {
              clearAll();
            }}
          >
            CLEAR ALL
          </button>
          <hr />
        </div>

        <div className="price-sort-filter">
          <span className="filter-title">Sort By :</span>
          <div className="LtH-radio">
            <label>
              <input
                type="radio"
                name="radio-price"
                value="LowToHigh"
                checked={Sort === "LowToHigh"}
                onChange={() => sortFilter("LowToHigh")}
              />
              Price - Low to High
            </label>
          </div>

          <div className="HtL-radio">
            <label>
              <input
                type="radio"
                name="radio-price"
                value="HighToLow"
                checked={Sort === "HighToLow"}
                onChange={() => sortFilter("HighToLow")}
              />
              Price - High to Low
            </label>
          </div>
          <hr />
        </div>

        <div className="price-range-filter">
          <span className="filter-title">Price :</span>
          <div className="slidecontainer">
            <input
              type="range"
              min="50"
              max="2000"
              value={PriceRange}
              className="slider"
              onChange={(e) => priceFilter(e)}
            />
            <div className="rangeLabel">
              <p>₹ 50</p>
              <p>₹ 2000</p>
            </div>
          </div>
          <hr />
        </div>
        <div className="category-filter">
          <span className="filter-title">Categories :</span>


          <div
            className="category-value-container"
            style={{ display: "flex", flexDirection: "column" }}
          >
            {
              categories.map(data=><label key={data.id}><input
                type="checkbox"
                value= {`${data.categoryName}`}
                name={`${data.categoryName}`}
                onChange={() => categoryFilter(`${data.categoryName}`)}
                checked={Category.find(genre=>genre===`${data.categoryName}`) ? true :false}
               
              />{data.categoryName}</label>)
            }
          </div>
          <hr />
        </div>

        <div className="availability-filter">
          <span className="filter-title">Availability :</span>

          <div
            className="availability-value-container"
            style={{ display: "flex", flexDirection: "column" }}
          >
            <label>
              <input
                type="checkbox"
                value="outOfStock"
                name="outOfStock"
                checked={OutOfStock}
                onChange={() => toggleOutOfStock()}
              />
            Include Out of Stock
            </label>
        
            <span className="filter-title" style={{marginTop:"5px"}}>Delivery Preference:</span>
            <label>
              <input
                type="checkbox"
                value="fastDelivery"
                name="fastDelivery"
                checked={FastDelivery}
                onChange={() => toggleFastDelivery()}
              />
              Fast Delivery Only
            </label>
          </div>
          <hr />
        </div>

        <div className="prodType-filter">
          <span className="filter-title">Type Of :</span>
          <div
            className="prodType-value-container"
            style={{ display: "flex", flexDirection: "column" }}
          >

            {
              productTypes.map(product=>{
                return( <label key={product}>

                <input
                  type="checkbox"
                  value={product}
                  name={product}
                  onChange={() => productTypeFilter(product)}
                  checked={ProductType.find(productType=>productType===product ) ? true :false}
                />
               {product}
              </label>)
              })
            }
          </div>
          <hr />
        </div>

        <div className="rating-sort-filter">
          <span className="filter-title">CUSTOMER RATINGS :</span>
          <div className="4Star-radio">
            <label>
              <input
                type="radio"
                name="radio-rating"
                value="4"
                checked={Rating === 4}
                onChange={() => ratingFilter(4)}
              />
              4★ & above
            </label>
          </div>

          <div className="3Star-radio">
            <label>
              <input
                type="radio"
                name="radio-rating"
                value="3"
                checked={Rating === 3}
                onChange={() => ratingFilter(3)}
              />
              3★ & above
            </label>
          </div>
          <hr />
        </div>
      </div>
      <button className="closeBtn" onClick={toggleFilterDisplay}>
        Close
      </button>
    </div>
  );
};
