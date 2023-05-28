import React, { useState } from "react";
import "./Product-Page.css";
import { Filters } from "../../Components";
import { useDataContext } from "../../context/data/dataContext";
import { FcFilledFilter } from "react-icons/fc";
import { ProductCard } from "../../Components/ProductCard/ProductCard";
import { useFilterContext } from "../../context/filters/filterContext";

export const ProductPage = () => {
  const [showFilters, setShowFilters] = useState(false);
  const { productsData } = useDataContext();
  const { filterState } = useFilterContext();
  console.log(filterState);
  const {
    Sort,
    PriceRange,
    Category,
    ProductType,
    OutOfStock,
    FastDelivery,

    Rating,
  } = filterState;

  const filteredData = () => {
    let originalData = productsData;
    // filtering based on product category
    if (Category?.length > 0) {
      originalData = originalData.filter((item) =>
        Category?.some((genre) => item.category.includes(genre))
      );
    }
    // filtering based on product type
    if (ProductType?.length > 0) {
      originalData = originalData.filter((item) =>
        ProductType?.some((productType) => item.product.includes(productType))
      );
    }
    // filtering based on out-of-stock
    if (!OutOfStock) {
      originalData = originalData.filter((item) => !item.outOfStock);
    }
    // filtering based on fast delivery
    if (FastDelivery) {
      originalData = originalData.filter((item) => item.fastDelivery);
    }

    // sorting data in ascending or descending based on price
    if(Sort){
      originalData=originalData.sort((item1,item2)=>Sort==="LowToHigh" ? item1.currentPrice-item2.currentPrice :  item2.currentPrice-item1.currentPrice)
    }
     // sorting data based on price range
     if(PriceRange>0){
      originalData=originalData.filter(({currentPrice})=>currentPrice>PriceRange)
     }
     // sorting data based on rating
     if(Rating){
      originalData=originalData.filter(({rating})=>rating>Rating)
     }

    return originalData;
  };

  const toggleFilterDisplay = () => {
    setShowFilters((prev) => !prev);
  };

  return (
    <div className="product-page-container">
      <div
        className="filter-section"
        style={{ display: showFilters ? "block" : "" }}
      >
        <Filters toggleFilterDisplay={toggleFilterDisplay} />
      </div>

      <div className="productDisplay-section">
        <div className="productDisplay-section-header">
          <h1 className="productDisplay-section-title">Products</h1>
          <button className="filterBtn" onClick={() => toggleFilterDisplay()}>
            Filters <FcFilledFilter />
          </button>
        </div>
        <div className="navigation-history">
          <p>
            Home <span style={{ color: "grey" }}>&gt;</span> Products
          </p>
        </div>

        <div className="product-section">
          <ul className="product-list">
            {filteredData().map((product) => {
              return <ProductCard key={product._id} productData={product} />;
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};
