import React from 'react'
import { useNavigate } from 'react-router-dom'


export const Home = () => {
  const navigate=useNavigate();
  return (
    <>
    <div style={{ marginTop:"60px"}}>Home</div>
    <button onClick={()=>navigate('/products')}>Products</button>
    </>
  )
}