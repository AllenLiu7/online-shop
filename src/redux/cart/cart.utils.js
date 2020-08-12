export const addItemToCart = (cartItems, newItem) => {
  //every item has their own id, chech if there is already a same item in the cart
  const existItem = cartItems.find((cartItem) => cartItem.id === newItem.id);
  //if there are same items, find the item and increase its quantity
  if (existItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === newItem.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }
  //otherwise add the new item and set the quantity to 1
  return [...cartItems, { ...newItem, quantity: 1 }];
};

export const removeItem = (cartItems, itemToRemove) => {
  //create an array that does not have the item which needs to be removed
  return cartItems.filter((cartItem) => cartItem.id !== itemToRemove.id);
};

export const increaseItem = (cartItems, itemToIncrease) => {
  //increase the quantity if the id is exist
  return cartItems.map((cartItem) =>
    cartItem.id === itemToIncrease.id
      ? { ...cartItem, quantity: cartItem.quantity + 1 }
      : cartItem
  );
};

export const decreaseItem = (cartItems, itemTodecrease) => {
  //in the checkout page, if the item has more than 1 quantity, find this item in cartItem and decrease the quantity by 1
  //if the quantity = 1, remove the item.
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
