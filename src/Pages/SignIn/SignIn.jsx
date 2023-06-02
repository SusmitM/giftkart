import "./SignIn.css";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState } from "react";
import { useNavigate} from "react-router-dom";
import { useAuthContext } from "../../context/auth/authContext";
import { AiFillEye,AiFillEyeInvisible } from "react-icons/ai";


export const SignIn = () => {
  const navigate = useNavigate();
  
  const { signinHandler } = useAuthContext();

  const [loginData, setLoginData] = useState({ email: "", password: "" });
  const [showPassword,setShowPassword]=useState(false);

  const updateData = (e, element) => {
    setLoginData((loginData) => ({ ...loginData, [element]: e.target.value }));
  };

  const clickHandeler = () => {
    if (
      loginData.email !== "" &&
      loginData.password !== "" &&
      loginData.email.includes("@")
    ) {
      signinHandler(loginData);
      // navigate(location?.state?.from?.pathname);
    } else {
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
    }
  }
  const  handelGuestLogin=()=>{
    signinHandler({ email: "adarshbalika@gmail.com", password: "adarshbalika" });
    // navigate(location?.state?.from?.pathname);

  }
  const togglePassword=()=>{
    setShowPassword(prev=>!prev)
  }


  return (
    
    <div className="signIn-container">
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
      <h2 className="signIn-header">Sign In</h2>
      <div className="signIn-label">Sign in to your account</div>

      <div className="signIn-form">
        <label className="input-label">Email address</label>
        <input
          className="input-box"
          type="email"
          value={loginData.email}
          onChange={(e) => updateData(e, "email")}
        />

        <label className="input-label"> Password</label>
       <div className="password-container"> <input className="password-input"
          type={showPassword ? "text":"password"}
          placeholder="**********"
          value={loginData.password}
          onChange={(e) => updateData(e, "password")}
        />
       <span className="password-toggel" onClick={()=>togglePassword()}>{showPassword ? <AiFillEyeInvisible/>: <AiFillEye/> }</span>
        </div>

        <button className="signIn-btn" onClick={() => clickHandeler()}>
          Sign In
        </button>
        <button className="guestLogin-btn" onClick={() => handelGuestLogin()}>
          Login as Guest
        </button>
      </div>
      <div className="signUp-label">
        Don't have an account?{" "}
        <span className="signUp-link" onClick={() => navigate("/signup")}>
          Register Here
        </span>
      </div>
    </div>
  );
};
