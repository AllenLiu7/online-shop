import { createSelector } from "reselect";

const shopItemsSelector = (state) => state.shopItems;
// select the reducor first

export const selectCollections = createSelector(
  [shopItemsSelector],
  (shopItems) => shopItems.collections
);

export const selectCollection = (collectionId) =>
  createSelector([selectCollections], (collections) =>
    collections.find((collection) => collection.routeName === collectionId)
  );
