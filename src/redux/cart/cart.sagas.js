import { clearCart } from "../cart/cart.actions";
import UserActionTypes from "../user/user.types";
import { call, takeLatest, all, put } from "redux-saga/effects";

export function* clearCartOnSignOut() {
  yield put(clearCart());
}

export function* onSignOutSuccess() {
  yield takeLatest(UserActionTypes.SIGN_OUT_SUCCESS, clearCartOnSignOut);
}

export function* cartSagas() {
  yield all([call(onSignOutSuccess)]);
}
