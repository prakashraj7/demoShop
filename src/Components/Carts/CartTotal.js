import React from 'react'
import { useCartContext } from '../Context/Cart_Context'

const CartTotal = () => {

    const { total_amount } = useCartContext();

    return (
        <div className='flex justify-end '>
            <div className=' m-4 py-4 px-12 border border-1 text-center rounded  bg-slate-100'>
                <h4 className='mb-2 font-semibold'>Total Price</h4>
                <hr />
                <p className='mt-2'>₹ {total_amount}</p>
            </div>
        </div>
    )
}

export default CartTotal