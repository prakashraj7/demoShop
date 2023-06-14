import React from 'react'
import { useProductContext } from '../Context/ProductContext'
import { BsFillGridFill, BsList, BsListColumns } from "react-icons/bs";
import ProductShow from './ProductShow';
import SideBar from '../HomePages/SideBar/SideBar';
import { useFilterContext } from '../Context/Filter_Context';
import FirstSort from './Sorts/FirstSort';
import SearchSide from './SideBar/SearchSide';

// BsFillGridFill
// BsList

const MainHomePage = () => {

    const { products } = useProductContext();
    // console.log(products)

    const { filter_products, search } = useFilterContext();
    console.log(search)

    return (
        <div class="min-h-screen p-2 ">
            <div className="">
                <div className=' flex  p-1 mx-8  my-4 justify-center items-center  outline-offset-2 outline-1 rounded bg-gradient-to-r to-emerald-600 from-sky-400'>

                    <SearchSide />
                    <hr class="w-full mx-4 h-1   bg-gray-100 border-0 rounded md:my-4 dark:bg-gray-700"></hr>
                    <FirstSort />
                </div>
                <div className="mx-auto max-w-2xl px-4 py-14 sm:px-6 sm:py-8 lg:max-w-7xl lg:px-8">
                    <div className="grid grid-cols-1 gap-x-6 gap-y-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
                        {filter_products.filter((x) => {
                            if (search == "") {
                                return x;
                            } else if (x.name.toLowerCase().includes(search)) {
                                return x;
                            }
                        }).map((x) => {
                            return <ProductShow key={x.id} {...x} />
                        })}
                    </div>
                </div>
            </div>

        </div>

    )
}

export default MainHomePage














{/* <SideBar /> */ }
{/* <div className='flex gap-2'>
                        <button>
                            <span className='p-1'><BsFillGridFill /></span>
                        </button>
                        <button>
                            <span className='p-1'><BsList /></span>
                        </button>
                    </div> */}
{/* <hr class="w-48 h-1 mx-auto  bg-gray-100 border-0 rounded md:my-4 dark:bg-gray-700"></hr> */ }
