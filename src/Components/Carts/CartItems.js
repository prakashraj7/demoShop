import React from 'react'
import img1 from "../../asserts/imgANdsvg/homeImages/img1.jpg"
import Quantity from '../HomePages/Quantity'
import CartQuantity from './CartQuantity'
import { FaTrash } from "react-icons/fa"
import { useCartContext } from '../Context/Cart_Context'

const CartItems = ({ x }) => {

    const { removeItem } = useCartContext();
    // console.log("Joooo")
    // console.log(x.id)

    return (
        <>
            <div className='grid grid-cols-2 justify-center items-center text-center gap-1'>
                <img src={x.image} className='h-20 w-24 my-6 rounded-md' />
                <span>{x.name.toUpperCase()}</span>
            </div>

            <span>{x.price}</span>

            <CartQuantity qua={x.quantity} ids={x.id} />

            <span>{x.price * x.quantity}</span>

            <div className=' flex justify-center  font-extrabold text-red-500 '>
                <FaTrash onClick={() => removeItem(x.id)} />
            </div>
        </>
    )
}

export default CartItems