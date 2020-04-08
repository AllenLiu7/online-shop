// Firebase App (the core Firebase SDK) is always required and must be listed first
import firebase from "firebase/app";

// If you enabled Analytics in your project, add the Firebase SDK for Analytics
import "firebase/analytics";

// Add the Firebase products that you want to use
import "firebase/auth";
import "firebase/firestore";

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
  apiKey: "AIzaSyBUbkrY_TDXhlq7jtY_WLs6MHqvKKJz0zU",
  authDomain: "cloth-commerce.firebaseapp.com",
  databaseURL: "https://cloth-commerce.firebaseio.com",
  projectId: "cloth-commerce",
  storageBucket: "cloth-commerce.appspot.com",
  messagingSenderId: "230557840593",
  appId: "1:230557840593:web:643ef4e058de9d698b01f0",
  measurementId: "G-P95CFTJ8NF",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const createUserProfileDocument = async (user, additionalData) => {
  if (!user) return;

  const userRef = firestore.doc(`Users/${user.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = user;
    const createAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }

  return userRef;
};

//export these const for usage elsewhere
export const auth = firebase.auth();
export const firestore = firebase.firestore();

//set up google auth
var provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account",
});

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
