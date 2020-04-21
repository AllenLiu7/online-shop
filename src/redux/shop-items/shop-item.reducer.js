import { SHOP_DATA } from "./shop-item.data";
import { shopItemActionTypes } from "./shop-item.types";

const INITIAL_STATE = {
  collections: null,
};

const shopItemsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case shopItemActionTypes.ADD_DATA_TO_REDUCER:
      return {
        ...state,
        collections: action.payload,
      };
    default:
      return state;
  }
};

export default shopItemsReducer;
