import React from 'react'

const ProductReducer = (state, action) => {

    switch (action.type) {
        case "SET_LOADING":
            return {
                ...state, isLoading: true,
            };
        case "HANDLE_ERROR":
            return {
                ...state, isLoading: false,
                isError: true,
            };
        case "API_DATA":
            return {
                ...state,
                products: action.payload,
            };
        case "SINGLE_API_DATA":
            return {
                ...state,
                singleProduct: action.payload,
            };


        default:
            return state;
    }

}

export default ProductReducer