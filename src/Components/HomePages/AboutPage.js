import React from 'react'
import ab1 from '../../asserts/imgANdsvg/homeImages/ab1.jpg'
import ab2 from '../../asserts/imgANdsvg/homeImages/ab2.jpg'
import gl from "../../asserts/imgANdsvg/homeImages/gold.jpg"
import { Link } from 'react-router-dom'

const AboutPage = () => {
    return (
        <div className=' grid grid-cols-2 gap-2  my-10 mx-20 h-screen '>
            <div className='relative rounded '>
                <img src={ab1} className='relative rounded-md z-20 pr-10 mt-4' />
                <img src={ab2} className='absolute rounded-lg h-40 bottom-40 z-20 right-0' />
                <img src={gl} className='float absolute rounded-md h-3/4 w-80 z-0 top-0 right-0' />
            </div>
            <div className='rounded border'>
                <div class="p-10   h-full">
                    <h1 className='mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-gray-500'>
                        <span className='text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400'> <b>About</b></span>
                    </h1>
                    <p className='mb-4 max-w-lg text-2xl font-semibold leading-relaxed text-gray-900 dark:text-gray-700'>
                        Furniture is one such part of our homes that cannot be missed out in
                        any of the cases. It makes our home aesthetically valuable by giving
                        us all the comfort and relaxation that we desire. Certainly, one
                        cannot deny the fact that a home is not complete without the right set
                        of furniture.
                    </p>
                    <Link to="/mainhomepage" class="bg-gradient-to-r to-emerald-600 from-sky-400 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                        shop now
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default AboutPage