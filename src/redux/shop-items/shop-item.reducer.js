import { SHOP_DATA } from "./shop-item.data";

const INITIAL_STATE = {
  collections: SHOP_DATA,
};

const shopItemsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default shopItemsReducer;
