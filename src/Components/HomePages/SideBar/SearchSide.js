import React from 'react'
import { useFilterContext } from '../../Context/Filter_Context'

const SearchSide = () => {



    const { filters: { text }, updateFilters, upSearch, search } = useFilterContext();


    return (
        <div className='m-1'>
            <div onSubmit={(e) => e.preventDefault()}>
                {/* <input type="text" name='text' value={text} onChange={updateFilters} placeholder='Search' className="block w-full p-2 mt-0 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" /> */}
                <input type="text" name='text' value={search} onChange={(e) => upSearch(e)} placeholder='Search' className="block w-full p-2 mt-0 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
            </div>
        </div>
    )
}

export default SearchSide