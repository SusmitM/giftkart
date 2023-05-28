import axios from 'axios';
import { useNavigate } from "react-router-dom";


const { createContext, useContext, useState, useEffect } = require("react");

const authContext=createContext();


export const AuthContextProvider=({children})=>{
    const navigate= useNavigate();

     const encodedToken = localStorage.getItem("token");

   const [loginToken,setLoginToken]=useState(encodedToken);

//Sign-Up functionality

const signupHandler = async (formData) => {
  
    try {
      const response = await axios.post(`/api/auth/signup`, {
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        password: formData.password,
      });
      console.log(response)
      if(response.status===201){
        // saving the encodedToken in the localStorage
        localStorage.setItem("token", response.data.encodedToken);
        setLoginToken(response.data.encodedToken)
        navigate("/products");
     }
    

    } catch (error) {
      console.log(error);
      alert("Invalid Credentials")
    }
  };

 //Sign-In functionality 
const signinHandler = async (loginData) => {
  
  try {
    const response = await axios.post(`/api/auth/login`, {
      email: loginData.email,
      password: loginData.password,
    });
    if(response.status===200){
       // saving the encodedToken in the localStorage
       localStorage.setItem("token", response.data.encodedToken);
       setLoginToken(response.data.encodedToken)
       navigate("/products");
    }
   
      

  } catch (error) {
    console.log(error);
    alert("Invalid Credentials")
  }
};



    return(
        <authContext.Provider value={{loginToken,setLoginToken,signupHandler,signinHandler }}>
            {children}
        </authContext.Provider>
    )
}




export const useAuthContext=()=>useContext(authContext);