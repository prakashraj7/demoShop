import React, { useEffect, useState } from 'react';
import img1 from '../../asserts/imgANdsvg/homeImages/img1.jpg';
import { NavLink, useParams } from 'react-router-dom';
import { useProductContext } from '../Context/ProductContext';
import Star from '../Helpers/Star';

import { useCartContext } from '../Context/Cart_Context';
import Quantity from './Quantity';


const API = `https://course-api.com/react-store-single-product`


const SingleProductDet = () => {

    const { id } = useParams();
    // console.log(id)

    const { rendSingleProduct, singleProduct } = useProductContext();
    // console.log(rendSingleProduct);

    const { addToCart } = useCartContext();



    const { id: prakId, name, company, description, price, stock, reviews, category, images = [{ url: "" }] } = singleProduct;



    useEffect(() => {
        rendSingleProduct(`${API}?id=${id}`)
    }, []) //Rend single Product api.

    const [imgTilt, setImgTilt] = useState(0);

    const [quantity, setQuantity] = useState(1)

    const handInc = () => {
        quantity < stock ? setQuantity(quantity + 1) : setQuantity(stock)
    }
    const handDec = () => {
        quantity > 1 ? setQuantity(quantity - 1) : setQuantity(1)
    }

    const yes = images[0].url;
    console.log(yes)


    return (
        <div className='grid h-screen grid-cols-2 border gap-4 m-4'>
            <div className=' m-6'>

                <img src={images[imgTilt].url} alt={images[imgTilt].filename} className='h-96 w-full object-cover block  rounded' />
                <div className='m-2 border h-40	flex  justify-center items-center'>
                    {
                        images.map((x, i) => {
                            return (
                                <img className='m-4 h-20 w-20 rounded-sm' key={i} src={x.url} alt={x.filename} onClick={(() => setImgTilt(i))} />
                            )
                        })
                    }
                </div>
            </div>
            <div className=' m-6 bg-white'>
                <h2 class="text-4xl font-extrabold dark:text-black">{name}</h2>

                <span class="text-3xl font-bold text-gray-900 dark:text-yellow-500">₹ {price}</span>
                <p className='text-gray-500 dark:text-gray-400 pr-4 my-4'>{description}</p>

                <div className='grid grid-cols-2 grid-rows-2 my-10 w-80'>
                    <div className='my-2 font-semibold text-gray-900'>Available :</div>
                    <div className='my-2 '>{stock > 0 ? "In Stock" : "Not Available"}</div>

                    <div className='my-2 font-semibold text-gray-900'>Brand :</div>
                    <div className='my-2 '>{company}</div>
                </div>
                <hr class="h-px my-4 bg-gray-200 border-0 dark:bg-gray-400"></hr>
                <div>
                    <Quantity handInc={handInc} handDec={handDec} quantitys={quantity} />
                    <NavLink to="/addedCartpage" onClick={() => addToCart(id, price, name, singleProduct, quantity, imgTilt, images, yes)}>
                        <button className='w-40  py-2 rounded bg-gradient-to-r to-emerald-600 from-sky-400'>Add To Cart</button>
                    </NavLink>
                </div>
            </div>
        </div>
    )
}

export default SingleProductDet















{/* <div className='my-2 font-semibold text-gray-900'>SKU :</div>
                    <div className='my-2 '>{prakId}</div> */}