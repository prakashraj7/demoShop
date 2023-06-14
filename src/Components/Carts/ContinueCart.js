import React from 'react'
import { NavLink } from 'react-router-dom'
import { useCartContext } from '../Context/Cart_Context'

const ContinueCart = () => {

    const { clearCart } = useCartContext();
    return (
        <div className='flex justify-between my-6 '>
            <NavLink to="/mainhomepage">
                <button class="bg-gradient-to-r to-emerald-600 from-sky-400 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Continue Shoping
                </button>
            </NavLink>
            <button onClick={clearCart} class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
                Clear Shoping Cart
            </button>
        </div>
    )
}

export default ContinueCart