import axios from "axios";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const { createContext, useContext, useState, useEffect } = require("react");

const authContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const navigate = useNavigate();

  const encodedToken = localStorage.getItem("token");

  const [loginToken, setLoginToken] = useState(encodedToken);

  //Sign-Up functionality

  const signupHandler = async (formData) => {
    try {
      const response = await axios.post(`/api/auth/signup`, {
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        password: formData.password,
      });
      if (response.status === 201) {
        // saving the encodedToken in the localStorage
        localStorage.setItem("token", response.data.encodedToken);
        setLoginToken(response.data.encodedToken);
        navigate("/products");

         // Toast for successful signUp
        toast.success("Sign-Up Successful 🎉🎉", {
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
    } catch (error) {
      console.error(error);
        // Toast for unsuccessful signUp
      toast.error('Invalid Credentials!!!', {
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
  };

  //Sign-In functionality
  const signinHandler = async (loginData) => {
    try {
      const response = await axios.post(`/api/auth/login`, {
        email: loginData.email,
        password: loginData.password,
      });
      if (response.status === 200) {
        // saving the encodedToken in the localStorage
        localStorage.setItem("token", response.data.encodedToken);
        setLoginToken(response.data.encodedToken);
        navigate("/products");
         // Toast for successful login
        toast.success("Login Successful 🎉🎉", {
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
    } catch (error) {
      console.error(error);

      // Toast for unsuccessful sign-In
      toast.error('Invalid Credentials!!!', {
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
  };

  return (
    <>
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
      <authContext.Provider
        value={{ loginToken, setLoginToken, signupHandler, signinHandler }}
      >
        {children}
      </authContext.Provider>
    </>
  );
};

export const useAuthContext = () => useContext(authContext);
