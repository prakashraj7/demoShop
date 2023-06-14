import React from 'react'

const FilterReducer = (state, action) => {

    switch (action.type) {
        case "LOAD_FILTER_PRODUCTS":
            return {
                ...state,
                filter_products: [...action.payload],
                all_products: [...action.payload],
            };

        case "GET_SORTED_VALUE":
            return {
                ...state,
                sorting_value: action.payload,
            }

        case "SORTING_PRODUCTS":
            let newSortData;

            const { filter_products, sorting_value } = state;
            let tempSortData = [...action.payload];

            const sortingProducts = (a, b) => {
                if (sorting_value === "lowest") {
                    return a.price - b.price;
                }
                if (sorting_value === "highest") {
                    return b.price - a.price;
                }
                if (sorting_value === "az") {
                    return a.name.localeCompare(b.name);
                }
                if (sorting_value === "za") {
                    return b.name.localeCompare(a.name);
                }
            }
            newSortData = tempSortData.sort(sortingProducts)

            return {
                ...state,
                filter_products: newSortData,
            }



        case "UPDATE_FILTERS": {
            const { name, value } = action.payload;
            return {
                ...state,
                filters: {
                    ...state.filters,
                    [name]: value,
                },
            };
        }


        case "FILTER_PRODUCTS": {

            const { filter_products } = state;
            let tempProducts = [...filter_products];
            const { text } = state.filters;

            if (text) {
                tempProducts = tempProducts.filter((product) => {
                    return product.name.toLowerCase().includes(text);
                });
            }

            return {
                ...state,
                products: tempProducts,
            };
        }

        default:
            return state;
    }
}

export default FilterReducer