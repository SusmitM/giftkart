import React from 'react'
import { useParams } from 'react-router-dom'

export const SingleProduct = () => {
  const {productId}=useParams();
  console.log(productId)
  return (
    <div>SingleProduct</div>
  )
}
