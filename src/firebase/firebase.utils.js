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

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
