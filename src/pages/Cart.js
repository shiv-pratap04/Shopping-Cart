import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router';
import CartItem from '../components/CartItem';

const Cart = () => {

    const {cart} = useSelector((state) => state);
    const [totalAmount,setTotalAmount] = useState(0);

    useEffect(() => {
        setTotalAmount(cart.reduce((acc,curr) => acc + curr.price,0));
    },[cart])

  return (
    <div>
        {
            cart.length > 0 ?
            (<div className='flex flex-col lg:flex-row'>
                <div>
                    {
                        cart.map((item,index) => {
                            return <CartItem key={item.id} item={item} itemIndex={index} />
                        })
                    }
                </div>

                <div className='p-10  flex flex-col justify-between h-[30rem] lg:w-[30rem] gap-3 
                                    shadow-[5px_5px_rgba(0,_98,_90,_0.4),_10px_10px_rgba(0,_98,_90,_0.3),_15px_15px_rgba(0,_98,_90,_0.2),_20px_20px_rgba(0,_98,_90,_0.1),_25px_25px_rgba(0,_98,_90,_0.05)]
                                    lg:fixed lg:right-[4rem] top-[10rem] sm:w-full  '>
                    <div>
                        <div className='uppercase text-green-600 font-bold text-xl'>Your Cart</div>
                        <div className='uppercase text-green-600 font-extrabold text-[2.8rem]'>Summary</div>
                        <p className='font-bold text-gray-800'>
                            <span>Total items: {cart.length}</span>
                        </p>
                    </div>

                    <div>
                        <p className='text-gray-700 font-semibold'>Total Amount :
                        <span className='text-black font-bold'>${totalAmount.toFixed(2)}</span>  </p>
                        <button className='w-full border border-zinc-200 bg-green-600 text-white 
                            p-5 rounded-md hover:bg-green-700 transition duration-700 hover:text-white text-xl mt-2 cart'>
                                Checkout Now
                        </button>
                    </div>
                </div>
            </div>
            ) : 

            (
                <div className='flex flex-col justify-center items-center h-[30rem] relative gap-5 '>
                    <h1 className='font-bold'>Cart <span className="text-red-600">Empty</span></h1>
                    <Link to={"/"}>
                        <button className='border border-zinc-200 bg-green-700 text-white p-5 rounded-md hover:bg-green-600 transition duration-700 hover:text-white'>
                            Shop Now
                        </button>
                    </Link>
                </div>
            )
        }

        
    </div>
  )
}

export default Cart