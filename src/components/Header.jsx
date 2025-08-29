// import React from 'react'
// import { NavLink } from 'react-router-dom'
// import {FiShoppingCart} from 'react-icons/fi'
// import {CgMenu,CgClose} from 'react-icons/cg'

// const Header = () => {
//   return (
//     <div className='bg-gray-100 flex justify-between items-center p-4 '>
//       <NavLink to="/">
//         <h1 className='text-2xl text-purple-600 font-bold'>Muhammad Bin Adil</h1>
//       </NavLink>
//       <ul className="navitems flex justify-between gap-8 mx-6 px-8">
//         <li><NavLink to="/" className="navlink hover:text-purple-500 text-xl">Home</NavLink></li>
//         <li><NavLink to="/About" className="navlink hover:text-purple-500 text-xl">About</NavLink></li>
//         <li><NavLink to="/Products" className="navlink hover:text-purple-500 text-xl">Products</NavLink></li>
//         <li><NavLink to="/Contact" className="navlink hover:text-purple-500 text-xl">Contact</NavLink></li>
//         <li className='pt-1.5'>
//             <NavLink to="/Cart" className="navlink text-purple-500 relative">
//         <FiShoppingCart className='relative text-2xl'/>
//         <span className='cart-total absolute w-5 h-5 text-white bg-red-500 rounded-full flex justify-center items-center -top-3 -right-3 text-sm'>10</span>
//         </NavLink></li>
//       </ul>
//       <div>
//         <CgMenu className='hidden bg-transparent cursor-pointer border-none md:inline-block md:z-50 md:border-neutral-900'/>
//         <CgClose className='display-none'/>
//       </div>
//     </div>
//   )
// }

// export default Header
import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { FiShoppingCart } from 'react-icons/fi'
import { CgMenu, CgClose } from 'react-icons/cg'
import { useCartContext } from '../CartContext'
import { useAuth0 } from '@auth0/auth0-react';
const Header = () => {
  const { cart } = useCartContext();
  const total_items = cart.reduce((acc, item) => acc + item.quantity, 0);
  const [menuOpen, setMenuOpen] = useState(false)

  const toggleMenu = () => setMenuOpen(!menuOpen)
  const{loginWithRedirect}=useAuth0();
  return (
    <div className='bg-gray-100 flex justify-between items-center p-4 relative'>
      <NavLink to="/">
        <h1 className='text-2xl text-purple-600 font-bold'>Muhammad Bin Adil</h1>
      </NavLink>

      {/* Desktop Menu */}
      <ul className="hidden md:flex navitems justify-between gap-8 mx-6 px-8">
        <li><NavLink to="/" className="navlink hover:text-purple-500 text-xl">Home</NavLink></li>
        <li><NavLink to="/About" className="navlink hover:text-purple-500 text-xl">About</NavLink></li>
        <li><NavLink to="/Products" className="navlink hover:text-purple-500 text-xl">Products</NavLink></li>
        <li><NavLink to="/Contact" className="navlink hover:text-purple-500 text-xl">Contact</NavLink></li>
        <li><button onClick={()=>loginWithRedirect()}>Log In</button></li>
        <li className='pt-1.5'>
          <NavLink to="/Cart" className="navlink text-purple-500 relative">
            <FiShoppingCart className='relative text-2xl' />
            <span className='cart-total absolute w-5 h-5 text-white bg-red-500 rounded-full flex justify-center items-center -top-3 -right-3 text-sm'>{total_items}</span>
          </NavLink>
        </li>
      </ul>

      {/* Mobile Menu Toggle */}
      <div className='md:hidden z-50'>
        {menuOpen ? (
          <CgClose className='text-3xl cursor-pointer' onClick={toggleMenu} />
        ) : (
          <CgMenu className='text-3xl cursor-pointer' onClick={toggleMenu} />
        )}
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <ul className="absolute top-14 left-0 w-full bg-gray-400 flex flex-col items-center gap-6 py-6 shadow-md z-40">
          <li><NavLink to="/" className="navlink hover:text-purple-500 text-xl" onClick={toggleMenu}>Home</NavLink></li>
          <li><NavLink to="/About" className="navlink hover:text-purple-500 text-xl" onClick={toggleMenu}>About</NavLink></li>
          <li><NavLink to="/Products" className="navlink hover:text-purple-500 text-xl" onClick={toggleMenu}>Products</NavLink></li>
          <li><NavLink to="/Contact" className="navlink hover:text-purple-500 text-xl" onClick={toggleMenu}>Contact</NavLink></li>
          <li><button onClick={()=>loginWithRedirect()}>Log In</button></li>
          <li>
            <NavLink to="/Cart" className="navlink text-purple-500 relative" onClick={toggleMenu}>
              <FiShoppingCart className='relative text-2xl' />
              <span className='cart-total absolute w-5 h-5 text-white bg-red-500 rounded-full flex justify-center items-center -top-3 -right-3 text-sm'>10</span>
            </NavLink>
          </li>
        </ul>
      )}
    </div>
  )
}

export default Header
