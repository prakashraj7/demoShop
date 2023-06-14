import { createContext, useContext, useEffect, useReducer } from "react";
import reducer from '../Reducer/ProductReducer';

const AppContext = createContext();

// const API = 'https://dummyjson.com/products';
// const API = 'https://fakestoreapi.com/products';
// const API = 'https://api.pujakaitem.com/api/products';

const API = 'https://course-api.com/react-store-products';


const initialState = {
    isLoading: false,
    isError: false,
    products: [],
    singleProduct: {},
}


const AppProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const renderedProducts = async (url) => {

        dispatch({ type: "SET_LOADING" })
        try {
            const res = await fetch(url);
            const products = await res.json();
            // console.log(products)

            dispatch({ type: "API_DATA", payload: products })

        } catch (error) {
            dispatch({ type: "HANDLE_ERROR", payload: error })
        }
    };


    const rendSingleProduct = async (url) => {
        try {
            const res = await fetch(url);
            const singleProduct = await res.json();
            // console.log(singleProduct);

            dispatch({ type: "SINGLE_API_DATA", payload: singleProduct })
        } catch (error) {
            dispatch({ type: "SINGLE_ERROR" })

        }
    };
    useEffect(() => {
        renderedProducts(API);
    }, [])

    return (<AppContext.Provider value={{ ...state, rendSingleProduct }}>{children}</AppContext.Provider>)
};

//CUS
const useProductContext = () => {
    return useContext(AppContext)
}

export { AppProvider, AppContext, useProductContext };