import { call, all } from "redux-saga/effects";
import { userSagas } from "./user/user.sagas";
import { fetchCollectionsStart } from "./shop-items/shop-item.sagas";

export default function* rootSaga() {
  yield all([call(fetchCollectionsStart), call(userSagas)]);
}
