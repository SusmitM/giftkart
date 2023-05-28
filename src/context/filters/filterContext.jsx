import { useReducer } from "react";
import { useContext } from "react";
import { createContext } from "react";
import {
  filterReducer,
  initialFilterState,
} from "../../reducers/FilterReducer";

const filterContext = createContext();

export const FilterContextProvider = ({ children }) => {
  const [filterState, filterDispatch] = useReducer(
    filterReducer,
    initialFilterState
  );

  return (
    <filterContext.Provider value={{ filterDispatch, filterState }}>
      {children}
    </filterContext.Provider>
  );
};

export const useFilterContext = () => useContext(filterContext);
