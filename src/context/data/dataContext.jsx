import { createContext, useContext, useEffect, useReducer, useState } from "react";
import { GetItemData } from "../../services/dataService/GetItemData";
import { GetCategoryData } from "../../services/dataService/GetCategoryData";

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
     
    // state that holds the category values
    const [categories,setCategories]=useState([]);

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
// function to get the categories data from backend 
const getCategoryData=async ()=>{
    try{
        const {data,status}=await GetCategoryData();
      if(status===200){
        setCategories(data.categories)
      }
    }
    catch(error){
        console.error(error)
    }
}




    //useEffect hook to call the getData() and getCategoryData() on initial render
    useEffect(()=>{
        getData();
        getCategoryData();
        setLoading(false)
    },[])


    return(
        <DataContext.Provider value={{productsData:productState.productData[0],Loading,categories}}>
            {children}
        </DataContext.Provider>
    )
}

// A custom hook which will be used to access the DataContext
export const useDataContext=()=>useContext(DataContext);