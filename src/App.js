import { useEffect, useState } from "react";
import "./App.css";
import { ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {Loader, Navigation} from "./Components";
import AppRoutes from "./Routes/AppRoutes";

function App() {
 const [loading,setLoading]=useState(true);

 useEffect(()=>{
  setTimeout(()=>{
    setLoading(false)
  },2000)
 },[])

  return (
    <div className="App">
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

      {loading && <Loader/> }
      {!loading && 
         <>
         <Navigation/>
         <AppRoutes/>
         
         </>
      }
     


     
    </div>
  );
}

export default App;
