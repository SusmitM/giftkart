import React from 'react'
import { useState } from 'react'
import "./SignUp.css"
import { useAuthContext } from '../../context/auth/authContext'
import { useNavigate } from 'react-router-dom'

export const SignUp = () => {
  const navigate=useNavigate()

const {signupHandler}=useAuthContext();


  const [formData,setFormData]=useState({firstName:"",lastName:"",email:"",password:""})

  const updateData=(e,element)=>{
    setFormData(formData=>({...formData,[element]:e.target.value}));
  }

  const clickHandeler=()=>{
    if(formData.firstName !== "" && formData.lastName !== "" && formData.email !== "" && formData.password !== "" && formData.email.includes('@') ){
      signupHandler(formData);
      navigate("/products");
    }
    else{
      alert("Ïnvalid Credintials")
    }
    
  }
  return (
    <>
      <h2 className='signup-header'>Sign Up</h2>
    <form className='signup-form'>
      <label>Enter your first name:
        <input
          type="text" 
          value={formData.firstName}
          onChange={(e) => updateData(e,"firstName")}
        />
      </label>
      <label>
        Enter your Last name:
        <input
        type='text'
        value={formData.lastName}
        onChange={(e) => updateData(e,"lastName")}
        />

      </label>
      <label>
        Enter your Email:
        <input
        type='email'
        value={formData.email}
        onChange={(e) => updateData(e,"email")}
        />

      </label>
      <label>
        Enter your Password:
        <input
        type='password'
        value={formData.password}
        onChange={(e) => updateData(e,"password")}
        />
      </label>
      
    </form>
    <button className='signup-btn' onClick={()=>clickHandeler()}>Create a new Account</button>
    

    </>
  
  )
}
