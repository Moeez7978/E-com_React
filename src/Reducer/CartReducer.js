const cartReducer = (state, action) => {
  switch (action.type) {
   case "ADD_TO_CART": {
  const { id, color, quantity, product } = action.payload;

  const existingItemIndex = state.cart.findIndex(
    (item) => item.id === id && item.color === color
  );

  if (existingItemIndex !== -1) {
    // ✅ Increment quantity instead of replacing
    const updatedCart = [...state.cart];
    const existingItem = updatedCart[existingItemIndex];
    const newQuantity = existingItem.quantity + quantity;

    updatedCart[existingItemIndex] = {
      ...existingItem,
      quantity: newQuantity,
      total: newQuantity * existingItem.price,
    };

    return { ...state, cart: updatedCart };
  }

  // ✅ Add new item if not found
  const newItem = {
    id,
    name: product.name,
    price: product.price,
    color,
    quantity,
    image: product.image,
    total: product.price * quantity,
  };

  return { ...state, cart: [...state.cart, newItem] };
}

    case "REMOVE_FROM_CART": {
      const { id, color } = action.payload;
      const updatedCart = state.cart.filter(
        (item) => !(item.id === id && item.color === color)
      );
      return { ...state, cart: updatedCart };
    }

    case "CLEAR_CART":
      return { ...state, cart: [] };

    default:
      return state;
  }
};

export default cartReducer;