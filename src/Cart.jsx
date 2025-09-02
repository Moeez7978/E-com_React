import React from 'react';
import { useCartContext } from './CartContext';
import { motion, AnimatePresence } from 'framer-motion';

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
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="max-w-5xl mx-auto px-4 py-8"
    >
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-4xl font-bold text-purple-700 mb-6"
      >
        Your Cart
      </motion.h1>

      <AnimatePresence>
        {cart.length === 0 ? (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="text-gray-500"
          >
            Your cart is empty.
          </motion.p>
        ) : (
          <>
            <motion.div
              initial="hidden"
              animate="visible"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { staggerChildren: 0.1 },
                },
              }}
              className="grid grid-cols-1 gap-6 mb-8"
            >
              {cart.map((item) => (
                <motion.div
                  key={item.id + item.color}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ duration: 0.4 }}
                  className="flex items-center gap-6 bg-white p-4 rounded-lg shadow-md"
                >
                  <motion.img
                    src={item.image}
                    alt={item.name}
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
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
                  <motion.button
                    whileHover={{ scale: 1.1, color: "#dc2626" }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => removeFromCart(item.id, item.color)}
                    className="text-red-600 hover:underline text-sm"
                  >
                    Remove
                  </motion.button>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 text-white p-6 rounded-lg shadow-lg"
            >
              <p className="text-md mb-2">
                Total Items: <span className="font-semibold">{totalItems}</span>
              </p>
              <p className="text-md mb-2">
                Subtotal: <span className="font-semibold">₹{subtotal}</span>
              </p>
              <p className="text-md mb-2">
                Shipping Fee: <span className="font-semibold">₹{shippingFee}</span>
              </p>
              <p className="text-lg font-bold mt-2">
                Grand Total: ₹{grandTotal}
              </p>

              <div className="flex gap-4 mt-4">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={clearCart}
                  className="px-4 py-2 bg-white text-purple-700 rounded hover:bg-yellow-300 hover:text-purple-900 transition"
                >
                  Clear Cart
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition"
                >
                  Proceed to Checkout
                </motion.button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.section>
  );
};

export default Cart;