import React from 'react'
import { useProductContext } from '../Context/ProductContext';
import { NavLink } from 'react-router-dom';
import PriceFormatter from '../Helpers/PriceFormatter';
import { useFilterContext } from '../Context/Filter_Context';

const ProductShow = ({ name, image, id, price }) => {

    return (
        // <div class="flex flex-col justify-center items-center max-w-sm mx-auto my-8">
        <NavLink to={`/singleproduct/${id}`}>
            <a href="#" class="group">
                <div class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                    <img src={image} class=" h-44 w-full object-cover object-center group-hover:opacity-75" alt="Tall slender porcelain bottle with natural clay textured body and cork stopper." />
                </div>
                <div className='flex justify-between m-1 items-center'>
                    <h3 class="mt-0 text-md text-gray-700">{name}</h3>
                    <p class=" text-lg font-medium text-gray-900"><PriceFormatter price={price} /></p>
                </div>
            </a>
        </NavLink>
    )
}

export default ProductShow


















    // < div class=" mx-auto flex px-5 bg-slate-500 py-2 lg:px-32 lg:pt-12" >

    //     <div class="flex  bg-green-100 w-1/3 flex-wrap">
    //         <div class="w-full p-1 md:p-2">
    //             <img
    //                 alt="gallery"
    //                 class="block  w-full rounded-lg object-cover object-center h-50 flex-wrap"
    //                 src={image} />
    //         </div>
    //         <div class="w-56 md:w-64 bg-white -mt-10 shadow-lg rounded-lg overflow-hidden">
    //             <div class="py-2 text-center font-bold uppercase tracking-wide text-gray-800">{title}</div>
    //             <div class="flex items-center justify-between py-2 px-3 bg-gray-400">
    //                 <h1 class="text-gray-800 font-bold ">$129</h1>
    //                 <button class=" bg-gray-800 text-xs text-white px-2 py-1 font-semibold rounded uppercase hover:bg-gray-700">Add to cart</button>
    //             </div>
    //         </div>

    //     </div>

    //     </div >