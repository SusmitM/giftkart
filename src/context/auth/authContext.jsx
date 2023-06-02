import axios from "axios";
import { useNavigate,useLocation } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const { createContext, useContext, useState, useEffect } = require("react");

const authContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const navigate = useNavigate();
  const location = useLocation();

  //getting the encoded token from local storage
  const encodedToken = localStorage.getItem("token");

   //getting the userData from local storage
  const localStorageUserData = JSON.parse(localStorage.getItem("profileData"));

 //state to manage the state of encoded token
  const [loginToken, setLoginToken] = useState(encodedToken);

   //state to manage the state of profile data that comes from signin api
  const[profileData,setProfileData]=useState(localStorageUserData?.user);

 //state to manage the order state locally
  const [userData,setUserData]=useState({order:[],orderAmount:"",address:[]});

  //state to manage the selected value of userProfile page
const [selectedValue, setSelectedValue] = useState("Profile");

  
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
        navigate("/signin");
       

         // Toast for successful signUp
        toast.success("Sign-Up Successful 🎉🎉", {
          position: "top-center",
          autoClose: 1000,
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
      toast.error(error.response.data.errors[0], {
        position: "top-center",
        autoClose: 1000,
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

        //saving userData  in the localStorage
        localStorage.setItem(
          "profileData",
          JSON.stringify({ user:response.data.foundUser})
        );
        setProfileData(response.data.foundUser)

        setLoginToken(response.data.encodedToken);
        navigate(location?.state?.from?.pathname ?? "/");


         // Toast for successful login
        toast.success("Login Successful 🎉🎉", {
          position: "top-center",
          autoClose: 1000,
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
      toast.error(error.response.data.errors[0], {
        position: "top-center",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
    }
  };

  //logout function
  const handelLogout=()=>{
    localStorage.removeItem("token");
    localStorage.removeItem("profileData");
    setLoginToken(false);
    navigate("/");
    toast.success("Sign-out Successful", {
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
  //loading the auth token on initial render
  useEffect(() => {
    setLoginToken(localStorage.getItem("token"))
  
  }, []);

  return (
    <>
     
      <authContext.Provider
        value={{ loginToken, setLoginToken, signupHandler, signinHandler,profileData,userData,setUserData,selectedValue,setSelectedValue,handelLogout}}
      >
        {children}
      </authContext.Provider>
    </>
  );
};

export const useAuthContext = () => useContext(authContext);
