// import React from 'react'
// import { NavLink } from 'react-router-dom'
// const Product = (product) => {
//     const{id,name,image,price,category}=product;
//     console.log({image});
//   return (
//     <>
//       <NavLink to={`/singleproduct/${id}`}>
//       <div className="card">
//         <figure>
//             <img src="{image}" alt={name} className=''/>
//             <figcaption className='caption'>{category}</figcaption>
//         </figure>
//         <div className="card-data">
//             <div className='flex flex-col justify-between'>
//                 <h3>{name}</h3>
//             <p>${price}</p>
//             </div>
//         </div>
//       </div>

//       </NavLink>
//     </>
//   )
// }

// export default Product
import React from 'react';
import { NavLink } from 'react-router-dom';
import {motion} from 'framer-motion'
const Product = ({ id, name, image, price, category }) => {
  return (
    <motion.div className="flex flex-wrap justify-center items-center p-4 mx-auto" initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    whileHover={{ scale: 1.05 }}
    transition={{ duration: 0.4, ease: "easeOut" }}
    >
      <NavLink to={`/singleproduct/${id}`} className="w-full max-w-sm">
        <div className="bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
          <figure className="relative">
            <motion.img src={image} alt={name} className="w-full h-48 object-cover rounded-t-xl"  whileHover={{ scale: 1.1 }}
      transition={{ duration: 0.3 }}/>
            <figcaption className="absolute top-2 left-2 bg-black bg-opacity-60 text-white text-xs px-2 py-1 rounded">
              {category}
            </figcaption>
          </figure>
          <div className="p-4 flex justify-between">
            <h3 className="text-lg font-semibold text-gray-800 truncate">{name}</h3>
            <p className="text-md text-blue-600 font-bold mt-1">${price}</p>
          </div>
        </div>
      </NavLink>
    </motion.div>
  );
};

export default Product;