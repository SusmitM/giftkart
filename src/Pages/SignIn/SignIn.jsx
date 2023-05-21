import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuthContext } from '../../context/auth/authContext'
export const SignIn = () => {
  const navigate=useNavigate()
  const {signinHandler}=useAuthContext();

  
  const [loginData,setLoginData]=useState({email:"",password:""})

  const updateData=(e,element)=>{
    setLoginData(loginData=>({...loginData,[element]:e.target.value}));
  }

  const clickHandeler=()=>{
    if(loginData.email !== "" && loginData.password !== "" && loginData.email.includes('@') ){
      signinHandler(loginData);
      navigate("/products");
    }
    else{
      alert("Ïnvalid Credintials")
    }
    
  }
 
  return (
    <>
    <h2 className='signin-header'>Sign In</h2>
    <form className='signin-form'>
      <label>Enter your Email:
        <input
          type="email" 
          value={loginData.email}
          onChange={(e) => updateData(e,"email")}
        />
      </label>
     
      <label>
        Enter your Password:
        <input
        type='password'
        value={loginData.password}
        onChange={(e) => updateData(e,"password")}
        />
      </label>
      
    </form>
    <button className='signup-btn' onClick={()=>clickHandeler()}>Create a new Account</button>
  
    </>
  )
}
