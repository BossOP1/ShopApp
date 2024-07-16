import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { add } from '../redux/Slices/CartSlice'
import { remove } from '../redux/Slices/CartSlice'
import { toast } from 'react-hot-toast'

const Product = ({post}) => {
    const {cart} = useSelector((state)=> state)
    const dispatch = useDispatch();

const addToCart = ()=>{
    dispatch(add(post));
    toast.success("Item added to Cart") 
}

const removeFromCart = () =>{
    dispatch(remove(post.id));
    toast.error("Item removed from Cart")
}


  return (
    <div className='flex flex-col justify-between items-center border rounded-xl hover:scale-110 transition-all duration-300 ease-in shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)] gap-3 p-4 mt-10 ml-5  '>
     <div>
        <p className='text-lg font-bold text-gray-700 text-left truncate w-40 mt-1'> {post.title.split(" ").slice(0,4).join(" ")+"..."}</p>
       </div>
       <div>
        <p className='w-40 text-gray-400 font-normal text-[10px] text-left' > {post.description.split(" ").slice(0,10).join(" ")+"..."}</p>
       </div>
       <div className='h-[180px]'>
       <img className='h-full w-full' src={post.image} />
       </div>

       <div className='flex justify-between items-center w-full '>
        <p className='text-green-500'> ${post.price}</p>
      
      
      {
        cart.some((p)=>p.id == post.id ) ? 
        (<button className=' border-2 border-gray-700 text-gray-700 rounded-3xl px-2 text-md font-semibold text-[12px] uppercase
        hover:bg-gray-700 hover:text-white transition-all duration-300 ease-in-out'
        onClick={removeFromCart}>
            Remove Item
        </button>)
        :
        (<button  className=' border-2 border-gray-700 text-gray-700 rounded-3xl px-2 text-md font-semibold text-[12px] uppercase
        hover:bg-gray-700 hover:text-white transition-all duration-300 ease-in-out'
        onClick={addToCart}>
            Add to cart
        </button>)
      }
       </div>

    </div>
  )
}

export default Product