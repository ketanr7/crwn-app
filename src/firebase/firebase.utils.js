import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config={
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

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt:'select_account'});
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;