import "./Checkout.css";
import { PriceCard } from "../Cart/components/PriceCard";
import { useAddressContext } from "../../context/address/addressContext";
import { useState } from "react";
import { useAuthContext } from "../../context/auth/authContext";
import { useNavigate } from "react-router-dom";






export const Checkout = () => {
  const {userData,setUserData,setSelectedValue}=useAuthContext()
  const { addressState } = useAddressContext();
  const [selectedAddress,setSelectedAddress]=useState();
  const navigate=useNavigate();

 


  return (
    <>
      <div className="checkoutPage-title">Checkout</div>
      <div className="checkout-container">
        <div className="addressBox">
          <ol className="addressList">
            {addressState.address.map((addressData) => (
              <li className="singleAddress">
                <label className="addressName"><input type="radio" name="selectedAddress" onChange={()=>setSelectedAddress(addressData)}/>
                Name: {addressData.Name}</label>
               
                <div className="addressCity">City: {addressData.City}</div>
                <div className="addressState">State: {addressData.State}</div>
                <div className="addressPincode">PinCode: {addressData.Pincode}</div>
                <div className="addressPhoneNo">PhoneNo: {addressData.PhoneNo}</div>
              </li>
            ))}
             <button
              className="addNewAddressBtn"
              onClick={() => {
                setSelectedValue("Address");
                navigate("/userProfile")
                
          
              }}
            > Add Address</button>
          </ol>
         
        </div>
       
        <div className="priceDetailBox">
          <PriceCard page="checkoutPage" selectedAddress={selectedAddress} />
        </div>
      </div>
    </>
  );
};
