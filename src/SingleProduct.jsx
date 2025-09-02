// import React, { useEffect } from 'react'
// import { useParams } from 'react-router-dom'
// import {useProductContext,} from '../src/productContext';

// const API="https://api.pujakaitem.com/api/products";
// const SingleProduct = () => {
//   const {id}=useParams();
//   const {getSingleProduct,isSingleLoading,singleProduct}=useProductContext();
//   const {id:alias,companyname,description,name,image,price,stars,reveiws}=singleProduct;

//   useEffect(() => {
//     getSingleProduct(`${API}?id=${id}`);
//   }, []);
// console.log(singleProduct.name);
// if(isSingleLoading){
//   return 
//   <h2 className="text-center text-lg font-semibold">Loading product details...</h2>;
// }
//   return (
//     <>
//    <h1>{name}</h1>
//     </>
//   )
// }

// export default  SingleProduct
import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useProductContext } from './productContext';
import AddToCart from './components/AddtoCart';

const API = "https://api.pujakaitem.com/api/products";

const StarRating = ({ stars = 0 }) => {
  const maxStars = 5;
  const filledStars = Math.round(stars);

  return (
    <div className="flex items-center gap-1 text-yellow-500">
      {[...Array(maxStars)].map((_, index) => (
        <svg
          key={index}
          className={`w-5 h-5 ${index < filledStars ? "fill-yellow-500" : "fill-gray-300"}`}
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M10 15l-5.878 3.09 1.122-6.545L.488 6.91l6.561-.955L10 0l2.951 5.955 6.561.955-4.756 4.635 1.122 6.545z" />
        </svg>
      ))}
    </div>
  );
};

const SingleProduct = () => {
  const { getSingleProduct, isSingleLoading, singleProduct } = useProductContext();
  const { id } = useParams();
  const [selectedColor, setSelectedColor] = useState(null);

  const colorNames = {
    "#ff0000": "Red",
    "#000000": "Black",
    "#CDD0D0": "Light Gray",
    "#22D3EF": "Sky Blue",
    "#000": "Black",
  };

  useEffect(() => {
    getSingleProduct(`${API}?id=${id}`);
  }, [id]);

  if (isSingleLoading) {
    return <div className="text-center py-10 text-lg font-semibold">Loading product details...</div>;
  }

  const {
    name,
    image,
    price,
    description,
    company,
    category,
    colors,
    stars,
    reviews,
  } = singleProduct || {};

  return (
    <section className="max-w-6xl mx-auto px-4 py-8">
      {/* 🧭 Breadcrumb Navigation */}
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="text-sm text-gray-500 mb-6"
      >
        <Link to="/" className="hover:underline">Home</Link> &gt;
        <Link to="/products" className="hover:underline ml-1">Products</Link> &gt;
        <span className="ml-1 text-gray-700 font-medium">{name}</span>
      </motion.nav>

      {/* 🖼️ Product Display */}
      <div className="grid md:grid-cols-2 gap-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <motion.img
            src={image}
            alt={name}
            className="w-full rounded-lg shadow-lg object-cover"
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.3 }}
          />
          <div className="flex gap-2 mt-4">
            {colors?.map((color, index) => (
              <motion.button
                key={index}
                onClick={() => setSelectedColor(color)}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 300 }}
                className={`w-8 h-8 rounded-full border-2 ${selectedColor === color
                  ? "ring-2 ring-offset-2 ring-blue-500 border-blue-500"
                  : "border-gray-300"
                  }`}
                style={{ backgroundColor: color }}
              />
            ))}
          </div>
          {selectedColor && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="mt-2 text-sm text-gray-700"
            >
              Selected Color: <span className="font-semibold">
                {colorNames[selectedColor] || selectedColor}
              </span>
            </motion.p>
          )}
        </motion.div>

        {/* 📦 Product Info */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.05, color: "#2563eb" }}
            transition={{ duration: 0.4 }}
            className="text-3xl font-bold text-gray-800 mb-2"
          >
            {name}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-sm text-gray-500 mb-4"
          >
            By <span className="font-medium">{company}</span> | Category: <span className="capitalize">{category}</span>
          </motion.p>
          <div className="flex items-center mb-2">
            <StarRating stars={stars} />
            <p className="text-sm text-gray-500 ml-2">({reviews} reviews)</p>
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-2xl font-semibold text-green-600 mb-4"
          >
            ₹{price}
          </motion.div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-gray-700 leading-relaxed mb-6"
          >
            {description}
          </motion.p>

          {/* 🛒 CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <AddToCart product={singleProduct} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default SingleProduct;