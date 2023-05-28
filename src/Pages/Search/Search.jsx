import { useState } from "react";
import { useDataContext } from "../../context/data/dataContext";
import { ProductCard } from "../../Components/ProductCard/ProductCard";
import { BsSearch } from "react-icons/bs";
import "./Search.css";

export const Search = () => {
  const { productsData } = useDataContext();
  const [searchData, setSearchData] = useState("");
  const searchFilteredData=()=>{
    if(searchData===""){
      return productsData
    }
    else{
      return productsData.filter(item=>item.name.toLowerCase().includes(searchData.toLowerCase()) || item.product.toLowerCase().includes(searchData.toLowerCase()))
    }
  }
  return (
    <>
      <div className="search-page-container">
        <div className="search-container">
          <div className="searchBar">
            <BsSearch />
            <input
              type="text"
              name="searchBar"
              placeholder="Enter the name or type of Product"
              value={searchData}
              onChange={(e) => setSearchData(e.target.value)}
            />
          </div>
        </div>
        <div className="product-display-container">
          <ul className="product-list">
            {searchFilteredData().map((product) => {
              return <ProductCard key={product._id} productData={product} />;
            })}
          </ul>
        </div>
      </div>
    </>
  );
};
