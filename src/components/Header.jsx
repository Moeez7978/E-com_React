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
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FiShoppingCart } from 'react-icons/fi';
import { CgMenu, CgClose } from 'react-icons/cg';
import { useCartContext } from '../CartContext';
import { useAuth0 } from '@auth0/auth0-react';
import { motion, AnimatePresence } from 'framer-motion';

const Header = () => {
  const { cart } = useCartContext();
  const total_items = cart.reduce((acc, item) => acc + item.quantity, 0);
  const [menuOpen, setMenuOpen] = useState(false);
  const { loginWithRedirect } = useAuth0();

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const navVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 },
  };

  const mobileMenuVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -50 },
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={navVariants}
      transition={{ duration: 0.6 }}
      className="bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 text-white flex justify-between items-center p-4 relative shadow-lg"
    >
      <NavLink to="/">
        <motion.h1
          whileHover={{ scale: 1.05 }}
          transition={{ type: 'spring', stiffness: 300 }}
          className="text-2xl font-bold tracking-wide"
        >
          Muhammad Bin Adil
        </motion.h1>
      </NavLink>

      {/* Desktop Menu */}
      <ul className="hidden md:flex navitems justify-between gap-8 mx-6 px-8">
        {['Home', 'About', 'Products', 'Contact'].map((item) => (
          <motion.li
            key={item}
            whileHover={{ scale: 1.1, color: '#fff' }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <NavLink to={`/${item === 'Home' ? '' : item}`} className="text-lg hover:text-yellow-300">
              {item}
            </NavLink>
          </motion.li>
        ))}
        <motion.li whileHover={{ scale: 1.05 }}>
          <button
            onClick={() => loginWithRedirect()}
            className="bg-white text-purple-600 px-4 py-1 rounded hover:bg-yellow-300 hover:text-purple-800 transition"
          >
            Log In
          </button>
        </motion.li>
        <motion.li whileHover={{ scale: 1.1 }} className="pt-1.5 relative">
          <NavLink to="/Cart" className="relative">
            <FiShoppingCart className="text-2xl" />
            <span className="absolute w-5 h-5 text-white bg-red-600 rounded-full flex justify-center items-center -top-3 -right-3 text-sm">
              {total_items}
            </span>
          </NavLink>
        </motion.li>
      </ul>

      {/* Mobile Menu Toggle */}
      <div className="md:hidden z-50">
        {menuOpen ? (
          <motion.div whileTap={{ scale: 0.9 }}>
            <CgClose className="text-3xl cursor-pointer" onClick={toggleMenu} />
          </motion.div>
        ) : (
          <motion.div whileTap={{ scale: 0.9 }}>
            <CgMenu className="text-3xl cursor-pointer" onClick={toggleMenu} />
          </motion.div>
        )}
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.ul
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={mobileMenuVariants}
            transition={{ duration: 0.4 }}
            className="absolute top-14 left-0 w-full bg-gradient-to-b from-purple-700 via-pink-600 to-red-500 text-white flex flex-col items-center gap-6 py-6 shadow-md z-40"
          >
            {['Home', 'About', 'Products', 'Contact'].map((item) => (
              <li key={item}>
                <NavLink
                  to={`/${item === 'Home' ? '' : item}`}
                  className="text-lg hover:text-yellow-300"
                  onClick={toggleMenu}
                >
                  {item}
                </NavLink>
              </li>
            ))}
            <li>
              <button
                onClick={() => loginWithRedirect()}
                className="bg-white text-purple-600 px-4 py-1 rounded hover:bg-yellow-300 hover:text-purple-800 transition"
              >
                Log In
              </button>
            </li>
            <li>
              <NavLink to="/Cart" className="relative" onClick={toggleMenu}>
                <FiShoppingCart className="text-2xl" />
                <span className="absolute w-5 h-5 text-white bg-red-600 rounded-full flex justify-center items-center -top-3 -right-3 text-sm">
                  {total_items}
                </span>
              </NavLink>
            </li>
          </motion.ul>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default Header;
