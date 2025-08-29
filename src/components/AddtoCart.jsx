import React, { useState } from 'react';
import { useCartContext } from '../CartContext';

const AddToCart = ({ product }) => {
  if (!product) return <p className="text-red-500">Product not loaded yet.</p>;

  const { id, name, price, colors, image } = product;
  const { addToCart } = useCartContext();

  const [selectedColor, setSelectedColor] = useState(colors?.[0] || '');
  const [quantity, setQuantity] = useState(1);

  const colorNames = {
    "#ff0000": "Red",
    "#000000": "Black",
    "#CDD0D0": "Light Gray",
    "#22D3EF": "Sky Blue",
    "#000": "Black",
  };

  const handleAddToCart = () => {
    addToCart(id, selectedColor, quantity, product);
  };

  return (
    <div className="mt-6">
      {/* 🎨 Color Selection */}
      <div className="mb-4">
        <p className="text-sm font-medium text-gray-700 mb-2">Select Color:</p>
        <div className="flex gap-2">
          {colors?.map((color, index) => (
            <button
              key={index}
              onClick={() => setSelectedColor(color)}
              className={`w-8 h-8 rounded-full border-2 transition ${
                selectedColor === color ? 'ring-2 ring-blue-500 border-blue-500' : 'border-gray-300'
              }`}
              style={{ backgroundColor: color }}
            ></button>
          ))}
        </div>
        <p className="mt-2 text-sm text-gray-600">
          Selected Color: <span className="font-semibold">
            {colorNames[selectedColor] || selectedColor}
          </span>
        </p>
      </div>

      {/* 🔢 Quantity Selector */}
      <div className="flex items-center gap-4 mb-6">
        <button
          onClick={() => setQuantity((prev) => Math.max(prev - 1, 1))}
          className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300 text-lg font-bold"
        >
          −
        </button>
        <span className="text-xl font-semibold">{quantity}</span>
        <button
          onClick={() => setQuantity((prev) => prev + 1)}
          className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300 text-lg font-bold"
        >
          +
        </button>
      </div>

      {/* 🛒 Add to Cart Button */}
      <button
        onClick={handleAddToCart}
        className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default AddToCart;