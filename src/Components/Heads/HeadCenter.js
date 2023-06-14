import React from 'react'
import { NavLink } from 'react-router-dom'

const HeadCenter = () => {
    return (
        <div className='flex justify-center'>
            <NavLink to="/">
                <h2 className='p-4 text-xl hover:underline '>Home</h2>
            </NavLink>
            <NavLink to="/about">
                <h2 className='p-4 text-xl hover:underline '>About</h2>
            </NavLink>
            <NavLink to="/mainhomepage">
                <h2 className='p-4 text-xl hover:underline '>Products</h2>
            </NavLink>
            <hr />

        </div>
    )
}

export default HeadCenter