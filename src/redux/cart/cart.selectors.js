import { createSelector } from 'reselect';

//select the state of cart
const cartItemsSelector = (state) => state.cart;

//select the state of cart.cartItems
export const selectCartItems = createSelector(
  [cartItemsSelector],
  (cart) => cart.cartItems
);

//select the cartItems directly and output the total quantities of item.
export const selectCartItemsQuantity = createSelector(
  [selectCartItems],
  (cartItems) =>
    cartItems.reduce((total, cartItem) => total + cartItem.quantity, 0)
);

//select the state of the cart.hidden
export const selectHiddenStatus = createSelector(
  [cartItemsSelector],
  (cart) => cart.hidden
);

//select cartItems and output total price
export const selectCartTotal = createSelector([selectCartItems], (cartItems) =>
  cartItems.reduce(
    (total, cartItem) => total + cartItem.quantity * cartItem.price,
    0
  )
);
