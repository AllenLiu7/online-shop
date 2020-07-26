export const addItemToCart = (cartItems, newItem) => {
  const existItem = cartItems.find((cartItem) => cartItem.id === newItem.id);

  if (existItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === newItem.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }

  return [...cartItems, { ...newItem, quantity: 1 }];
};

export const removeItem = (cartItems, itemToRemove) => {
  return cartItems.filter((cartItem) => cartItem.id !== itemToRemove.id);
};

export const increaseItem = (cartItems, itemToIncrease) => {
  return cartItems.map((cartItem) =>
    cartItem.id === itemToIncrease.id
      ? { ...cartItem, quantity: cartItem.quantity + 1 }
      : cartItem
  );
};

export const decreaseItem = (cartItems, itemTodecrease) => {
  if (itemTodecrease.quantity > 1) {
    return cartItems.map((cartItem) =>
      cartItem.id === itemTodecrease.id
        ? { ...cartItem, quantity: cartItem.quantity - 1 }
        : cartItem
    );
  } else {
    return cartItems.filter((cartItem) => cartItem.id !== itemTodecrease.id);
  }
};

//if the new item doesn`t exist, assign the quantity to 1
//otherwise, quatity + 1
