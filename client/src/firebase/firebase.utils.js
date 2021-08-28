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
        cartItems: [],
        userId: userAuth.uid,
        ...additionalData,
      });
    } catch (e) {
      console.log("An error has occurred:", e);
    }
  }

  return userReference;
};

export const getUserCartRef = async (userId) => {
  const cartRef = firestore.collection("users").doc(userId);
  const snapshot = await cartRef.get();
  const cartItemsExist = snapshot.get("cartItems");

  if (!cartItemsExist) {
    const cartDocRef = firestore.collection("users").doc(userId);
    await cartDocRef.update({ cartItems: [] });
    return cartDocRef;
  } else {
    return snapshot.ref;
  }
};

export const addCollectionAndDocuments = async (
  collectionKey,
  objectsToAdd
) => {
  const collectionRef = firestore.collection(collectionKey);

  const batch = firestore.batch();
  objectsToAdd.forEach((object) => {
    const newDocRef = collectionRef.doc();
    batch.set(newDocRef, object);
  });

  return await batch.commit();
};

// Converting the array to an object
export const convertCollectionsSnapshotToMap = (collections) => {
  const transformedCollection = collections.docs.map((document) => {
    const { title, items } = document.data();

    return {
      routeName: encodeURI(title.toLowerCase()),
      id: document.id,
      title,
      items,
    };
  });

  return transformedCollection.reduce((accumulator, collection) => {
    accumulator[collection.title.toLowerCase()] = collection;
    return accumulator;
  }, {});
};

firebase.initializeApp(config);

export const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      unsubscribe();
      resolve(userAuth);
    }, reject);
  });
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(googleProvider);

export default firebase;
