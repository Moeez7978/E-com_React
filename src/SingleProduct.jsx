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
          className={`w-5 h-5 ${index < filledStars ? "fill-yellow-500" : "fill-gray-300"
            }`}
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
  const [quantity, setQuantity] = useState(1);
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
      <nav className="text-sm text-gray-500 mb-6">
        <Link to="/" className="hover:underline">Home</Link> &gt;
        <Link to="/products" className="hover:underline ml-1">Products</Link> &gt;
        <span className="ml-1 text-gray-700 font-medium">{name}</span>
      </nav>

      {/* 🖼️ Product Display */}
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <img
            src={image}
            alt={name}
            className="w-full rounded-lg shadow-lg object-cover"
          />
          <div className="flex gap-2 mt-4">
            {colors?.map((color, index) => (
              <button
                key={index}
                onClick={() => setSelectedColor(color)}
                className={`w-8 h-8 rounded-full border-2 transition ${selectedColor === color
                  ? "ring-2 ring-offset-2 ring-blue-500 border-blue-500"
                  : "border-gray-300"
                  }`}
                style={{ backgroundColor: color }}
              ></button>
            ))}
          </div>
          {selectedColor && (
            <p className="mt-2 text-sm text-gray-700">
              Selected Color: <span className="font-semibold">
                {colorNames[selectedColor] || selectedColor}
              </span>
            </p>
          )}

        </div>

        {/* 📦 Product Info */}
        <div>
          <h1 className="text-3xl font-bold text-gray-800 mb-2">{name}</h1>
          <p className="text-sm text-gray-500 mb-4">
            By <span className="font-medium">{company}</span> | Category: <span className="capitalize">{category}</span>
          </p>
          <div className="flex items-center mb-2">
            <StarRating stars={stars} />
            <p className="text-sm text-gray-500 ml-2">({reviews} reviews)</p>
          </div>
          <div className="text-2xl font-semibold text-green-600 mb-4">₹{price}</div>
          <p className="text-gray-700 leading-relaxed mb-6">{description}</p>

          {/* 🛒 CTA Buttons */}
          <AddToCart product={singleProduct} />
        </div>
      </div>
    </section>
  );
};

export default SingleProduct;