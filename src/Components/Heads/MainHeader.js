import React from 'react'
import HeadCenter from './HeadCenter';
import HeadCart from './HeadCart';
import Lottie from 'lottie-react';

import cartLogo from '../../asserts/imgANdsvg/cartlogo.json'
import { Link } from 'react-router-dom';


const MainHeader = () => {
    return (
        // <div className='flex justify-center items-center border py-8 w-full h-16 '>
        <>
            <div className='grid grid-cols-3 mx-14 w-100 '>
                <div className='flex'>
                    <Lottie className='item-center  h-16' animationData={cartLogo} />
                </div>
                <div className=' '>
                    <HeadCenter />
                </div>
                <div className='flex justify-end items-center '>
                    <HeadCart />
                </div>
            </div>
            <hr className='mx-10' />
        </>
        // {/* </div> */ }
    )
}

export default MainHeader;


// w-1/5
// w-3/5
// w-1/5