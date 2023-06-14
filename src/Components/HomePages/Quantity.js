import React, { useState } from 'react'


const Quantity = ({ handInc, handDec, quantitys }) => {
    return (
        <div className='flex justify-center w-40 py-6 border '>
            <div className='flex justify-evenly w-40 font-extrabold'>
                <button onClick={handDec}>-</button>
                <h5>{quantitys}</h5>
                <button onClick={handInc}>+</button>
            </div>
        </div>
    )
}

export default Quantity