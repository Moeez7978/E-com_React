import { createContext, useReducer, useContext,useEffect, use } from "react";
import reducer from "./Reducer/CartReducer";

const CartContext = createContext();

const initialState = {
  
  cart:JSON.parse(localStorage.getItem("cart")) || [],
  total_amount: 0,
  total_items: 0,
  shipping_fee: 500,
};

const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
useEffect(() => {
  localStorage.setItem("cart", JSON.stringify(state.cart));
}, [state.cart]);

  const addToCart = (id, color, quantity, product) => {
    dispatch({ type: "ADD_TO_CART", payload: { id, color, quantity, product } });
  };

  const removeFromCart = (id, color) => {
    dispatch({ type: "REMOVE_FROM_CART", payload: { id, color } });
  };

  const clearCart = () => {
    dispatch({ type: "CLEAR_CART" });
  };

  return (
    <CartContext.Provider value={{ ...state, addToCart, removeFromCart, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};

const useCartContext = () => useContext(CartContext);

export { CartProvider, useCartContext };