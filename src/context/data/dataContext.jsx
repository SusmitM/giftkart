import { createContext, useContext, useEffect, useReducer, useState } from "react";
import axios from 'axios';
import { GetItemData } from "../../services/dataService/GetItemData";

//Creating the DataContext Context
const DataContext=createContext();


const reducer=(productState,action)=>{
    switch (action.type) {
        case "Initialize-Products-Data":{
            return{
                productData:[...productState.productData,action.payload]
            }
        }

        default:{
            return{
                productState
            }
        }
        
    }
}

// Context Provider Function
export const DataContextProvider=( {children})=>{

    //Initializing the reducer state which will manage Product Data
    const [productState,productDispatch]=useReducer(reducer,{productData:[]})

    //loading state
    const [Loading,setLoading]=useState(true);

   // function to get the products data from backend and add the data to productState
    const getData=async ()=>{
        try{
            const {status,data}=await GetItemData();
           if(status===200){
            productDispatch({
                type:"Initialize-Products-Data",
                payload:data.products
            })

           }
        }
        catch(error){
            console.error(error)
        }
    }
    //useEffect hook to call the getData() on initial render
    useEffect(()=>{
        getData();
        setLoading(false)
    },[])


    return(
        <DataContext.Provider value={{productsData:productState.productData[0],Loading}}>
            {children}
        </DataContext.Provider>
    )
}

// A custom hook which will be used to access the DataContext
export const useDataContext=()=>useContext(DataContext);