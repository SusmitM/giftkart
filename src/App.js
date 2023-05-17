import { useEffect, useState } from "react";
import "./App.css";

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

      {loading ?
       (<Loader/>) :
      (
         <>
         <Navigation/>
         <AppRoutes/>
         </>
      )}
     


     
    </div>
  );
}

export default App;
