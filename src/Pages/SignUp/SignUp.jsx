import "./SignUp.css";

import { ToastContainer, toast } from 'react-toastify';
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { useState } from "react";
import { useAuthContext } from "../../context/auth/authContext";
import { useNavigate } from "react-router-dom";

export const SignUp = () => {
  const navigate = useNavigate();

  const { signupHandler } = useAuthContext();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword:""
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);


  const updateData = (e, element) => {
    setFormData((formData) => ({ ...formData, [element]: e.target.value }));
  };
  const togglePassword = () => {
    setShowPassword(prev =>!prev);
  };
  const toggleConfirmPassword = () => {
    setShowConfirmPassword(prev =>!prev);
  };

  const clickHandeler = () => {
    if (
      formData.firstName === "" ||
      formData.lastName === "" ||
      formData.email === "" ||
      formData.password === "" ||
      !formData.email.includes("@")
    ) {
   
        // Toast for invalid form format
        toast.error(' Invalid Form Format', {
          position: "top-center",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          });
          return
    } 
    if(formData.password !==formData.confirmPassword){
        // Toast for password mismatch
        toast.error('Passwords are not same', {
          position: "top-center",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          });
          return
    }
    
    else {
      signupHandler(formData);
    
    }
  };

  return (
    <>
      <div className="signUp-container">
      <ToastContainer
        position="top-center"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
        <h2 className="signUp-header">Sign Up</h2>
        <div className="signUpLabel">Create your Account Here</div>
        <div className="signUp-form">
          <label className="inputLabel">Enter your first name:</label>
          <input
            className="input-container"
            type="text"
            value={formData.firstName}
            onChange={(e) => updateData(e, "firstName")}
          />
          <label className="inputLabel">Enter your Last name: </label>
          <input
            className="input-container"
            type="text"
            value={formData.lastName}
            onChange={(e) => updateData(e, "lastName")}
          />

          <label className="inputLabel">Enter your Email:</label>
          <input
            className="input-container"
            type="email"
            value={formData.email}
            onChange={(e) => updateData(e, "email")}
          />

          <label className="input-label"> Password</label>
          <div className="passwordContainer">
            {" "}
            <input
              className="passwordInput"
              type={showPassword ? "text" : "password"}
              placeholder="**********"
              value={formData.password}
              onChange={(e) => updateData(e, "password")}
            />
            <span className="passwordToggle" onClick={() => togglePassword()}>
              {showPassword.password ? <AiFillEyeInvisible /> : <AiFillEye />}
            </span>
          </div>
          <label className="input-label"> Confirm Password</label>
          <div className="passwordContainer">
            {" "}
            <input
              className="confirmPasswordInput"
              type={showConfirmPassword ? "text" : "password"}
              placeholder="**********"
              value={formData.confirmPassword}
              onChange={(e) => updateData(e, "confirmPassword")}
            />
            <span className="passwordToggle" onClick={() => toggleConfirmPassword()}>
              {showPassword.confirmPassword ? <AiFillEyeInvisible /> : <AiFillEye />}
            </span>
          </div>

          <button className="signUp-btn" onClick={() => clickHandeler()}>
            Create a new Account
          </button>
        </div>

        <div className="signInLabel">
          Already have an account?{" "}
          <span className="signIn-link" onClick={()=>navigate("/signin")}>
            LoginHere
          </span>
        </div>
      </div>
    </>
  );
};
