import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyD55i8EsCMnopQGz3qzNWBYIhiSSvCIjR0",
    authDomain: "crwn-db-3c6f7.firebaseapp.com",
    databaseURL: "https://crwn-db-3c6f7.firebaseio.com",
    projectId: "crwn-db-3c6f7",
    storageBucket: "crwn-db-3c6f7.appspot.com",
    messagingSenderId: "1150324435",
    appId: "1:1150324435:web:f2971f5a1bcb3479620e26",
    measurementId: "G-431BRRCJMJ"
  };

firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;