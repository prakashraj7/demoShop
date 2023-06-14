import React from 'react'

const Cart_Reducer = (state, action) => {

    if (action.type === "ADD_TO_CART") {
        let { id, price, singleProduct, quantity, name, imgTilt, images } = action.payload;


        let cartProduct;
        cartProduct = {
            id: id,
            name: singleProduct.name,
            quantity,
            price: singleProduct.price,
            image: singleProduct.images[0].url,
            max: singleProduct.stock,
        }


        return {
            ...state,
            cart: [...state.cart, cartProduct],
        }

    }

    if (action.type === "REMOVE_ITEM") {

        let updatedCart = state.cart.filter((x) => x.id !== action.payload)

        return {
            ...state,
            cart: updatedCart,
        }
    }

    if (action.type === "CLEAR_CART") {

        return {
            ...state,
            cart: [],
        }

    }

    if (action.type === "SET_DECREASE") {
        let updatedProduct = state.cart.map((x) => {
            if (x.id === action.payload) {
                let decQuantity = x.quantity - 1;
                if (decQuantity <= 1) {
                    decQuantity = 1;
                }
                return {
                    ...x,
                    quantity: decQuantity
                }
            } else {
                return x;
            }
        })
        return {
            ...state,
            cart: updatedProduct,
        }
    }
    if (action.type === "SET_INCREASE") {
        let updatedProduct = state.cart.map((x) => {
            if (x.id === action.payload) {
                let incQuantity = x.quantity + 1;
                if (incQuantity >= x.max) {
                    incQuantity = x.max;
                }
                return {
                    ...x,
                    quantity: incQuantity
                }
            } else {
                return x;
            }
        })
        return {
            ...state,
            cart: updatedProduct,
        }

    }

    if (action.type === "TOTAL_AMOUNT") {
        let updateAmount = state.cart.reduce((initialValue, x) => {
            let { price, quantity } = x;
            initialValue = initialValue + price * quantity;
            return initialValue;
        }, 0);

        return {
            ...state,
            total_amount: updateAmount,
        }

    }

    if (action.type === "TOTAL_CART_LO") {

        let updateTotalCartLo = state.cart.reduce((acc, curEle) => {

            let { quantity } = curEle;
            acc = acc + quantity;
            return acc;
        }, 0)

        return {
            ...state,
            total_item: updateTotalCartLo,
        }
    }

}

export default Cart_Reducer