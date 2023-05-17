import React, { useState } from 'react'
import "./Product-Page.css";
import {Filters} from "../../Components"
export const ProductPage = () => {
  const [showFilters,setShowFilters]=useState(false);
 const toggleFilterDisplay=()=>{
  setShowFilters(prev=>!prev)

 }
  return (
    <div className="product-page-container">
      <div className="filter-section" style={{display:showFilters ? "block":""}}>
      <Filters toggleFilterDisplay={toggleFilterDisplay} />
      
      </div>
      
      <div className="product-section">
        <h1>Product</h1>
        <button className="filterBtn" onClick={()=>toggleFilterDisplay()}>Filters</button>
      </div>
    </div>
  )
}
