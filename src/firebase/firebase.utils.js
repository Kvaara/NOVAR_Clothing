import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyD7o_bTynFYJZEZwZjgOA0pZjEA-0HLz_I",
  authDomain: "novar-clothing-db.firebaseapp.com",
  projectId: "novar-clothing-db",
  storageBucket: "novar-clothing-db.appspot.com",
  messagingSenderId: "239517206558",
  appId: "1:239517206558:web:2f1e733fb36c854f57460f",
  measurementId: "G-C0ZQ0DSBCM",
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (userAuth === null) return;

  const userReference = firestore.doc(`users/${userAuth.uid}`);

  const snapshot = await userReference.get();

  if (snapshot.exists === false) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      userReference.set({
        name: displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (e) {
      console.log("An error has occurred:", e);
    }
  }

  return userReference;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
