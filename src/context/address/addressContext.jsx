import { createContext, useContext,useReducer } from "react"
import { AddressReducer, initialAddressState } from "../../reducers/AddressReducer";

const AddressContext=createContext();

export const AddressContextProvider = ({children}) => {

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [addressState, addressDispatch] = useReducer(AddressReducer, initialAddressState);



  return (
    <>
    <AddressContext.Provider value={{addressState,addressDispatch}}>
        {children}
    </AddressContext.Provider>
    </>
  )
}

export const useAddressContext=()=>useContext(AddressContext);