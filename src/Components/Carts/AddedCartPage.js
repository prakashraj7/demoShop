import React from 'react'
import img1 from "../../asserts/imgANdsvg/homeImages/img1.jpg"

import CartHeaderColum from './CartHeaderColum'

import { useCartContext } from '../Context/Cart_Context'
import CartItems from './CartItems'
import ContinueCart from './ContinueCart'
import CartTotal from './CartTotal'

const AddedCartPage = () => {

    const { cart } = useCartContext();
    console.log(cart)

    if (cart.length === 0) {
        return (
            <div className='flex justify-center items-center h-screen font-extrabold'>
                <h3>No Items In Cart</h3>
            </div>
        )
    }

    return (
        <div className=' my-8 mx-28 py-8' >
            <CartHeaderColum />
            <div className='grid grid-cols-5 text-center items-center my-8'>
                {
                    cart.map((x) => {
                        return <CartItems key={x.id} x={x} />
                    })
                }
            </div>
            <hr />
            <ContinueCart />
            <CartTotal />
        </div>
    )
}

export default AddedCartPage;