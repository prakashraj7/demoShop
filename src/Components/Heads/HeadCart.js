import React from 'react'
import { ImCart, ImUser } from "react-icons/im";
import img from '../../asserts/imgANdsvg/sprite.svg'
import { useCartContext } from '../Context/Cart_Context';
import { NavLink } from 'react-router-dom';

const HeadCart = () => {

    const { total_item } = useCartContext();
    return (
        <div className='flex gap-2'>
            <NavLink to="/addedCartpage">
                <div className='flex justify-center gap-2 items-center'>
                    <span className='text-2xl'>Cart</span>
                    <span className='flex items-center relative text-2xl p-4 py-6 h-10'><ImCart />
                        <span className='text-sm absolute  rounded-xl p-1 float-left  right-0 top-0 bg-yellow-100'>{total_item}</span>
                    </span>
                </div>
            </NavLink>

            <NavLink to='/login'>
                <div className='flex justify-center gap-2 items-center'>
                    <span className='text-2xl'>Login</span>
                    <span className='flex items-center text-2xl h-10 '><ImUser /></span>

                </div>
            </NavLink>
        </div>
    )
}

export default HeadCart