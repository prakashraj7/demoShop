import React from 'react'
import { useProductContext } from '../Context/ProductContext'
import { NavLink } from 'react-router-dom';

const PageNav = () => {

    const { singleProduct } = useProductContext();
    const { name } = singleProduct;

    return (
        <>
            <NavLink to='/'>Home</NavLink > {name}
        </>
    )
}

export default PageNav