import { createContext, useContext, useEffect, useReducer, useState } from "react";
import { useProductContext } from "./ProductContext";
import reducer from '../Reducer/FilterReducer'


const FilterContext = createContext();

const initialState = {
    filter_products: [],
    filtered_products: [],
    all_products: [],
    grid_view: true,
    sorting_value: "lowest",
    filters: {
        text: "",
    }
}

export const FilterContextProvider = ({ children }) => {

    const { products } = useProductContext();

    const [state, dispatch] = useReducer(reducer, initialState);

    useEffect(() => {
        dispatch({ type: "LOAD_FILTER_PRODUCTS", payload: products });
    }, [products])

 
    const sorting = (e) => {
        let userValue = e.target.value;
        dispatch({ type: "GET_SORTED_VALUE", payload: userValue });
    }


    const updateFilters = (event) => {
        let name = event.target.name;
        let value = event.target.value;

        return dispatch({ type: "UPDATE_FILTERS", payload: { name, value } });
    };


    useEffect(() => {
        // console.log("Quinzo");
        dispatch({ type: "FILTER_PRODUCTS" })
        dispatch({ type: "SORTING_PRODUCTS", payload: products })

    }, [products, state.sorting_value, state.filters])


    const [search, setSearch] = useState("");
    const upSearch = (e) => {
        setSearch(e.target.value)
    }


    return (
        <FilterContext.Provider value={{ ...state, search, sorting, updateFilters, upSearch }}>
            {children}
        </FilterContext.Provider>
    );
};

export const useFilterContext = () => {
    return useContext(FilterContext);
}