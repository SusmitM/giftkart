import React from 'react'
import"./SingleProduct.css"
import { useParams } from 'react-router-dom'
import { useDataContext } from '../../context/data/dataContext';
import { SingleProductCard } from "../../Components";


export const SingleProduct = () => {
  const {productId}=useParams();
  const {productsData}=useDataContext();
  const selectedProduct=productsData.find(product=>product._id===productId); 
 
 
  return (
    <>
    <h1 className='page-heading'>Product Description</h1>
    <SingleProductCard selectedProduct={selectedProduct} />
  
    </>)
}
