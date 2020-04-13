import { createSelector } from "reselect";

const cartItemsSelector = (state) => state.cart;

export const selectCartItems = createSelector(
  [cartItemsSelector],
  (cart) => cart.cartItems
);

export const selectCartItemsQuantity = createSelector(
  [selectCartItems],
  (cartItems) =>
    cartItems.reduce((total, cartItem) => total + cartItem.quantity, 0)
);
