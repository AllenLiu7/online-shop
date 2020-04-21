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

//a function to transfer data from local to firestore
export const addCollectionAndDocuments = async (
  collectionKey,
  objectsToAdd
) => {
  //create reference to a new collection with the name {collectionKey}
  const collectionRef = firestore.collection(collectionKey);
  console.log(collectionRef);

  //use batch to finish the whole object, if something wrong in the middle, all objects will not be set.
  const batch = firestore.batch();
  objectsToAdd.forEach((obj) => {
    //create empty docRef for each objects with unique id
    const newDocRef = collectionRef.doc();
    console.log(newDocRef);
    //originally can be newDocRef.set(obj), but here we use batch.
    batch.set(newDocRef, obj);
  });

  return await batch.commit();
};

//function to get data from the collections snapshot
export const convertCollectionsSnapshotToMap = (collectionsSnapshot) => {
  const transforedCollection = collectionsSnapshot.docs.map((doc) => {
    const { title, items } = doc.data();

    return {
      //to add a routeName property that the origin doesn`t have
      routeName: encodeURI(title.toLowerCase()),
      //id we need is store in docs property not in the document snapshot
      id: doc.id,
      title,
      items,
    };
  });

  //change the data sturcture from array to hash table
  return transforedCollection.reduce((accumulator, collection) => {
    accumulator[collection.title.toLowerCase()] = collection;

    return accumulator;
  }, {});
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
