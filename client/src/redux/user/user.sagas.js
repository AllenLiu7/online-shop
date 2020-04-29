import { call, takeLatest, all, put } from "redux-saga/effects";
import { auth, googleProvider } from "../../firebase/firebase.utils";
import {
  createUserProfileDocument,
  getCurrentUser,
} from "../../firebase/firebase.utils";

import UserActionTypes from "./user.types";
import {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  signOutSuccess,
  signOutFailure,
} from "./user.action";

//logic in google and email sign in
export function* getSnapshotFromUserAuth(user, additionalData) {
  try {
    //user.uid is what we need to get the userRef
    const userRef = yield call(createUserProfileDocument, user, additionalData);
    const userSnapshot = yield userRef.get();
    //.data() to get the actuan properites on the user
    yield put(signInSuccess({ id: userSnapshot.id, ...userSnapshot.data() }));
  } catch (error) {
    yield put(signInFailure(error));
  }
}

export function* googleSignInAsync() {
  try {
    //user is one of the properties of the rerurned object
    const { user } = yield auth.signInWithPopup(googleProvider);
    yield getSnapshotFromUserAuth(user);
  } catch (error) {
    yield put(signInFailure(error));
  }
}

//the whole action will be passed in, so we destructure like this
export function* emailSignInAsync({ payload: { email, password } }) {
  try {
    //almost the same logic as the googlesignin
    const { user } = yield auth.signInWithEmailAndPassword(email, password);
    yield getSnapshotFromUserAuth(user);
  } catch (error) {
    yield put(signInFailure(error));
  }
}

export function* signUpAsync({ payload: { email, password, displayName } }) {
  try {
    const { user } = yield auth.createUserWithEmailAndPassword(email, password);
    console.log(user);
    yield put(signUpSuccess({ user, additionalData: { displayName } }));
  } catch (error) {
    yield put(signUpFailure(error));
  }
}

export function* signInAferSignUp({ payload: { user, additionalData } }) {
  yield getSnapshotFromUserAuth(user, additionalData);
}

//used in app.js to check if there is a user sign in in google, if it does, google will return a user object
export function* isUserAuthenticated() {
  try {
    const user = yield getCurrentUser();
    if (!user) return;
    yield getSnapshotFromUserAuth(user);
  } catch (error) {
    yield put(signInFailure(error));
  }
}

export function* signOut() {
  try {
    yield auth.signOut();
    yield put(signOutSuccess());
  } catch (error) {
    yield put(signOutFailure(error));
  }
}

export function* onGoogleSignInStart() {
  yield takeLatest(UserActionTypes.GOOGLE_SIGN_IN_START, googleSignInAsync);
}

export function* onEmailSignInStart() {
  yield takeLatest(UserActionTypes.EMAIL_SIGN_IN_START, emailSignInAsync);
}

export function* onSignUpStart() {
  yield takeLatest(UserActionTypes.SIGN_UP_START, signUpAsync);
}

export function* onSignUpSuccess() {
  yield takeLatest(UserActionTypes.SIGN_UP_SUCCESS, signInAferSignUp);
}

export function* onCheckUserSession() {
  yield takeLatest(UserActionTypes.CHECK_USER_SESSION, isUserAuthenticated);
}

export function* onSignOutStart() {
  yield takeLatest(UserActionTypes.SIGN_OUT_START, signOut);
}

export function* userSagas() {
  yield all([
    call(onGoogleSignInStart),
    call(onEmailSignInStart),
    call(onSignUpStart),
    call(onCheckUserSession),
    call(onSignOutStart),
    call(onSignUpSuccess),
  ]);
}
