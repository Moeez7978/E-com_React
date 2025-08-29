import React from 'react';
import { useCartContext } from './CartContext';

const Cart = () => {
  const { cart = [], removeFromCart, clearCart } = useCartContext();

  const shippingFee = 500;
  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);
  const subtotal = cart.reduce((acc, item) => acc + item.total, 0);
  const grandTotal = subtotal + shippingFee;
  const colorNames = {
    "#ff0000": "Red",
    "#000000": "Black",
    "#CDD0D0": "Light Gray",
    "#22D3EF": "Sky Blue",
    "#000": "Black",
  };
  return (
    <section className="max-w-5xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Your Cart</h1>

      {cart.length === 0 ? (
        <p className="text-gray-500">Your cart is empty.</p>
      ) : (
        <>
          <div className="grid grid-cols-1 gap-6 mb-8">
            {cart.map((item) => (
              <div
                key={item.id + item.color}
                className="flex items-center gap-6 bg-white p-4 rounded-lg shadow-md"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-24 h-24 object-cover rounded"
                />
                <div className="flex-1">
                  <h2 className="text-lg font-semibold text-gray-800">{item.name}</h2>
                  <p className="text-sm text-gray-500">
                    Color: <span className="font-medium">
                      {colorNames[item.color] || item.color}
                    </span>
                  </p>

                  <p className="text-sm text-gray-500">Quantity: {item.quantity}</p>
                  <p className="text-sm text-gray-500">Price: ₹{item.price}</p>
                  <p className="text-sm text-gray-700 font-semibold">Total: ₹{item.total}</p>
                </div>
                <button
                  onClick={() => removeFromCart(item.id, item.color)}
                  className="text-red-600 hover:underline text-sm"
                >
                  Remove
                </button>
              </div>
            ))}
          </div>

          <div className="bg-gray-100 p-6 rounded-lg shadow-sm">
            <p className="text-md text-gray-700 mb-2">
              Total Items: <span className="font-semibold">{totalItems}</span>
            </p>
            <p className="text-md text-gray-700 mb-2">
              Subtotal: <span className="font-semibold">₹{subtotal}</span>
            </p>
            <p className="text-md text-gray-700 mb-2">
              Shipping Fee: <span className="font-semibold">₹{shippingFee}</span>
            </p>
            <p className="text-lg font-bold text-gray-800 mt-2">
              Grand Total: ₹{grandTotal}
            </p>

            <div className="flex gap-4 mt-4">
              <button
                onClick={clearCart}
                className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
              >
                Clear Cart
              </button>
              <button
                className="px-6 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition"
              >
                Proceed to Checkout
              </button>
            </div>
          </div>
        </>
      )}
    </section>
  );
};

export default Cart;