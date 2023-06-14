import React from 'react'
import { useFilterContext } from '../../Context/Filter_Context'

const FirstSort = () => {
    const { sorting, filter_products } = useFilterContext();
    return (
        <div className='flex items-end'>
            <select id="sort" onClick={sorting} class="bg-gray-50 border border-gray-300 text-black-200 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white-200 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500">
                <option value="lowest">Price -(Low-High)</option>
                <option value="highest">Price -(High-Low)</option>
                <option value="az">A - Z</option>
                <option value="za">Z - A</option>
            </select>
        </div>
    )
}

export default FirstSort