import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../../context/auth/authContext";

import "./SignIn.css";

export const SignIn = () => {
  const navigate = useNavigate();
  const { signinHandler } = useAuthContext();

  const [loginData, setLoginData] = useState({ email: "", password: "" });

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
    } else {
      alert("Invalid Credentials");
    }
  };

  return (
    <div className="signIn-container">
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
        <input
          className="input-box"
          type="password"
          value={loginData.password}
          onChange={(e) => updateData(e, "password")}
        />

        <button className="signIn-btn" onClick={() => clickHandeler()}>
          Sign In
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
