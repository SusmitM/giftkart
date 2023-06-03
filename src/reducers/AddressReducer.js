import { v4 as uuid } from "uuid";
import { useAuthContext } from "../context/auth/authContext";

export const AddressReducer=(addressState,action)=>{
const{profileData}=useAuthContext();

    switch (action.type) {
      case "addToAddressState":
          return {...addressState,address:[...addressState.address,{id:uuid(), userId:profileData._id,...action.payload}]}  
      case "UpdateAddressState":
            return {address:addressState.address.map(addressData=>addressData.id===action.payload.id ? action.payload : addressData)}      
  
      default:
         return addressState;
  }
  
  }
  
  export const initialAddressState={address:[{"id":uuid(),userId:"default","Name":"Aman Kumar","City":"Raipur","State":"Chhattisgarh","Pincode":"700115","PhoneNo":951753426}]}; 