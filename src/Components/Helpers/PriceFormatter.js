import React from 'react'

const PriceFormatter = ({ price }) => {
    return price;
    // Intl.NumberFormat("en-IN", {
    //     style: "currency",
    //     currency: "INR",
    //     maximumFractionDigits: 2,
    // }).format(price / 100);
}

export default PriceFormatter