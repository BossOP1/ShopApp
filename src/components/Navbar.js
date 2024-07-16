import React from 'react'
import { FaCartShopping } from "react-icons/fa6";
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  
  const {cart} = useSelector((state)=>state);

  return (
    <div>
        <nav className='flex justify-between items-center h-20 max-w-6xl mx-auto'>
            <NavLink to="/">
            <img src="../assets/logo.png" className='h-14' />
            </NavLink>

         <div className='flex justify-between w-20 items-center font-medium '>
            <NavLink to="/">
            <p className='text-white'>Home</p>
            </NavLink>

            <NavLink to="/cart">
                <div className='relative text-white text-2xl'>
                       <FaCartShopping />
                       {
                        cart.length > 0 &&
                        <span className='absolute -top-3 -right-2 bg-green-600 text-xs w-5 h-5 rounded-full flex justify-center items-center animate-bounce'>{cart.length}</span>
                       }
                 
                </div>
           
            </NavLink>
           </div>
         </nav>
        </div>

   
  )
}

export default Navbar