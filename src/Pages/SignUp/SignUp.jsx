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
    
    }
    else{
      alert("Invalid Credentials")
    }
    
  }
  return (
    <>
     <div className="signUp-container">
     <h2 className='signUp-header'>Sign Up</h2>
     <div className='signUpLabel'>Create your Account Here</div>
    <div className='signUp-form'>
      
      <label  className="inputLabel">Enter your first name:</label>
      <input
           className="input-container"
          type="text" 
          value={formData.firstName}
          onChange={(e) => updateData(e,"firstName")}
        />
      <label className="inputLabel">
        Enter your Last name: </label>
        <input
        className="input-container"
        type='text'
        value={formData.lastName}
        onChange={(e) => updateData(e,"lastName")}
        />

     
      <label className="inputLabel">
        Enter your Email:</label>
        <input
        className="input-container"
        type='email'
        value={formData.email}
        onChange={(e) => updateData(e,"email")}
        />

      
      <label className="inputLabel">
        Enter your Password:</label>
        <input
        className="input-container"
        type='password'
        value={formData.password}
        onChange={(e) => updateData(e,"password")}
        />
      
      <button className='signUp-btn' onClick={()=>clickHandeler()}>Create a new Account</button>
      
    </div>
   
    <div className="signInLabel">
        Already have an account?{" "}
        <span className="signIn-link" onClick={() => navigate("/signin")}>
          LoginHere
        </span>
      </div>
     </div>

    </>
  
  )
}
