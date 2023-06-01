import { v4 as uuid } from "uuid";
export const AddressReducer=(addressState,action)=>{
    switch (action.type) {
      case "addToAddressState":
          return {...addressState,address:[...addressState.address,{id:uuid(),...action.payload}]}  
          
      default:
         return addressState;
  }
  
  }
  
  export const initialAddressState={address:[{"id":uuid(),"Name":"Adarsh Balika","City":"Kolkata","State":"W.B","Pincode":"700115","PhoneNo":1234567890}]}; 