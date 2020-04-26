import { cartActionTypes } from "./cart.types";

export const toggleCartHidden = () => ({
  type: cartActionTypes.TOGGLE_CART,
});

export const addToCart = (item) => ({
  type: cartActionTypes.ADD_CART,
  payload: item,
});

export const removeItem = (item) => ({
  type: cartActionTypes.REMOVE_ITEM,
  payload: item,
});

export const increaseItem = (item) => ({
  type: cartActionTypes.INCREASE_ITEM,
  payload: item,
});

export const decreaseItem = (item) => ({
  type: cartActionTypes.DECREASE_ITEM,
  payload: item,
});

export const clearCart = () => ({
  type: cartActionTypes.CLEAR_CART,
});
