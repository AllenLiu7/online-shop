import { call, takeLatest, all, put } from "redux-saga/effects";
import { auth, googleProvider } from "../../firebase/firebase.utils";
import { createUserProfileDocument } from "../../firebase/firebase.utils";

import UserActionTypes from "./user.types";
import {
  googleSignInStart,
  emailSignInStart,
  signInSuccess,
  signInFailure,
} from "./user.action";

export function* googleSignInAsync() {
  try {
    //user is one of the properties of the rerurned object
    const { user } = yield auth.signInWithPopup(googleProvider);
    //user.uid is what we need to get the userRef
    const userRef = yield call(createUserProfileDocument, user);
    const userSnapshot = yield userRef.get();
    //.data() to get the actuan properites on the user
    yield put(signInSuccess({ id: userSnapshot.id, ...userSnapshot.data() }));
  } catch (error) {
    yield put(signInFailure(error));
  }
}

export function* onGoogleSignInStart() {
  yield takeLatest(UserActionTypes.GOOGLE_SIGN_IN_START, googleSignInAsync);
}

export function* userSagas() {
  yield all([call(onGoogleSignInStart)]);
}
