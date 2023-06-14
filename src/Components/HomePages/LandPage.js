import React from 'react'
import img1 from '../../asserts/imgANdsvg/homeImages/img1.jpg'
import gold from '../../asserts/imgANdsvg/homeImages/gold.jpg'
import img3 from '../../asserts/imgANdsvg/homeImages/98.jpg'
import img4 from '../../asserts/imgANdsvg/homeImages/img2.jpg'
import { Link } from 'react-router-dom'

const LandPage = () => {
    return (
        <div class="grid grid-cols-2 m-12  gap-4 w-100">
            <div class="p-10   h-full">
                <h1 className='mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-gray-500'>
                    Welcome <br />to <span className='text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400'> <b>Furnitures</b></span>
                </h1>
                <p className='mb-4 max-w-lg text-2xl font-semibold leading-relaxed text-gray-900 dark:text-gray-700'>
                    Furniture is one such part of our homes that cannot be missed out in
                    any of the cases. It makes our home aesthetically valuable by giving
                    us all the comfort and relaxation that we desire. Certainly, one
                    cannot deny the fact that a home is not complete without the right set
                    of furniture.
                </p>

                <Link to="/mainhomepage" class="transition ease-in-out delay-150 bg-gradient-to-r to-emerald-600 from-sky-400 hover:-translate-y-1 hover:scale-110  duration-300 text-white font-bold py-2 px-4 rounded">
                    shop now
                </Link>
            </div>

            <div class="p-10  relative h-full">
                <img className='h-96 w-96 right-10 top-16  absolute rounded-lg z-40' src={img1} />
                <img className='h-4/6 w-80  right-40 top-40 absoluterounded-md  z-0 ' src={gold} />
                <img className='h-40 w-80 bottom-10  right-80 absolute  rounded-md z-50' src={img3} />
            </div>
        </div>
    )
}

export default LandPage