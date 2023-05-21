import React, { useState } from 'react'
import "./Product-Page.css";
import {Filters} from "../../Components"
import { useDataContext } from '../../context/data/dataContext';
import {FcFilledFilter} from 'react-icons/fc';
import { ProductCard } from '../../Components/ProductCard/ProductCard';



export const ProductPage = () => {

  const [showFilters,setShowFilters]=useState(false);

  const {productsData}=useDataContext();

  

 const toggleFilterDisplay=()=>{
  setShowFilters(prev=>!prev)
 }



  return (
    <div className="product-page-container">
      <div className="filter-section" style={{display:showFilters ? "block":""}}>
      <Filters toggleFilterDisplay={toggleFilterDisplay} />
      
      </div>
      
      <div className="productDisplay-section">

        <div className="productDisplay-section-header">
        <h1 className="productDisplay-section-title">Products</h1>
        <button className="filterBtn" onClick={()=>toggleFilterDisplay()}>Filters <FcFilledFilter/></button>
        </div>
        <div className="navigation-history"><p>Home <span style={{color:"grey"}}>&gt;</span> Products</p></div>

        <div className="product-section">
          <ul className='product-list'>
            {
          productsData.map(product=>{
            
            return(
              
              <ProductCard productData={product} />
              
              
            )
          })
          }
          </ul>

        </div>

        


      </div>
    </div>
  )
}
