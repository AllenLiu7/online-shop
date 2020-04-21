import { shopItemActionTypes } from "./shop-item.types";

export const addDataToReducer = (data) => ({
  type: shopItemActionTypes.ADD_DATA_TO_REDUCER,
  payload: data,
});
