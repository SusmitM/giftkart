import axios from 'axios';
import { useNavigate } from "react-router-dom";


const { createContext, useContext, useState, useEffect } = require("react");

const authContext=createContext();


export const AuthContextProvider=({children})=>{
    const navigate= useNavigate();

   

    useEffect(()=>{
      const encodedToken = localStorage.getItem("token");
      setLoginToken(encodedToken?true:false)

    },[])

   const [loginToken,setLoginToken]=useState();

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

    } catch (error) {
      console.log(error);
    }
  };

 //Sign-In functionality 
const signinHandler = async (loginData) => {
  
  try {
    const response = await axios.post(`/api/auth/login`, {
      email: loginData.email,
      password: loginData.password,
    });
    console.log(response.data.encodedToken)
       // saving the encodedToken in the localStorage
       localStorage.setItem("token", response.data.encodedToken);
       setLoginToken(response.data.encodedToken ? true: false)

  } catch (error) {
    console.log(error);
  }
};



    return(
        <authContext.Provider value={{loginToken,setLoginToken,signupHandler,signinHandler }}>
            {children}
        </authContext.Provider>
    )
}




export const useAuthContext=()=>useContext(authContext);