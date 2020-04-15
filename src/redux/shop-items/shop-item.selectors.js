import { createSelector } from "reselect";

const shopItemsSelector = (state) => state.shopItems;
// select the reducor first

export const selectItems = createSelector(
  [shopItemsSelector],
  (shopItems) => shopItems.items
);
