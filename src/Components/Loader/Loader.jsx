import React from 'react'
import "./Loader.css";
import loader from "../../assets/loader.gif"
export const Loader = () => {
  return (
    <div className='loader-div'>
        <img src={loader} alt='loading'/>
    </div>
  )
}
