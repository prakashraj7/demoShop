import React from 'react'
import { useCartContext } from '../Context/Cart_Context'

const CartQuantity = ({ qua, ids }) => {

    const { sethandIncs, sethandDecs } = useCartContext();


    return (
        <div className='flex justify-evenly '>
            <button onClick={() => sethandDecs(ids)}>-</button>
            <h5>{qua}</h5>
            <button onClick={() => sethandIncs(ids)}>+</button>
        </div>
    )
}

export default CartQuantity