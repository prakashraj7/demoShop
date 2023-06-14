import React from 'react'


const CartHeaderColum = () => {
    return (
        <>
            <div className="">
                <div className='grid grid-cols-5 text-center items-center mb-8'>
                    <h5>item</h5>
                    <h5>price</h5>
                    <h5>quantity</h5>
                    <h5>subtotal</h5>
                    <span>Remove</span>
                </div>
            </div>
            <hr />
        </>
    )
}

export default CartHeaderColum