import { createSelector } from "reselect";

const shopItemsSelector = (state) => state.shopItems;
// select the reducor first

export const selectCollections = createSelector(
  [shopItemsSelector],
  (shopItems) => shopItems.collections
);

export const selectCollectionsForPreview = createSelector(
  [selectCollections],
  (collections) => Object.keys(collections).map((key) => collections[key])
);

export const selectCollection = (collectionId) =>
  createSelector(
    [selectCollections],
    (collections) => collections[collectionId]
  );
