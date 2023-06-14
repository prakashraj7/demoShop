import { createContext, useContext, useEffect, useReducer } from "react";
import cartReduce from '../Reducer/Cart_Reducer'

const CartContext = createContext();

const initialState = {
    cart: [],
    total_item: "",
    total_amount: "",
    shipping_fee: 50000,
}

const CartProvider = ({ children }) => {
    const [state, dispatch] = useReducer(cartReduce, initialState)

    const addToCart = (id, colors, price, singleProduct, quantity, name, imgTilt, images, yes) => {
        dispatch({ type: "ADD_TO_CART", payload: { id, colors, price, singleProduct, quantity, name, imgTilt, images, yes } })
    }

    const removeItem = (id) => {
        dispatch({ type: "REMOVE_ITEM", payload: id })
    }

    const clearCart = () => {
        dispatch({ type: "CLEAR_CART" })
    }

    const sethandDecs = (id) => {
        dispatch({ type: "SET_DECREASE", payload: id })
    }
    const sethandIncs = (id) => {
        dispatch({ type: "SET_INCREASE", payload: id })
    }

    useEffect(() => {
        dispatch({ type: "TOTAL_CART_LO" })
        dispatch({ type: "TOTAL_AMOUNT" })
    }, [state.cart])

    return (
        <CartContext.Provider value={{ ...state, addToCart, removeItem, clearCart, sethandDecs, sethandIncs }}>
            {children}
        </CartContext.Provider>)
};

const useCartContext = () => {
    return useContext(CartContext);
};


export { CartProvider, useCartContext };