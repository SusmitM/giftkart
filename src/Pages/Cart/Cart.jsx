import React from 'react'
import { useCartContext } from '../../context/auth/cartContext'
import { useAuthContext } from '../../context/auth/authContext'
import { useEffect } from 'react';
import { initialCartState } from '../../reducers/CartReducer';

export const Cart = () => {
const {cartState,deleteFromCart}=useCartContext();

  return (
  <>
    <div>Cart</div>
    <ul>

      {
        cartState.cart.map((item)=>{
          return(
            <li>{item.name} <button onClick={()=>deleteFromCart(item._id)}>Delete</button></li>
          )
        })
      }
    </ul>
  </>
  )
}
