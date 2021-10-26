import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const config = {
  apiKey: "AIzaSyDphi_uwuKXTxl1g7nBo_H5uQl6TWJJTqA",
  authDomain: "crwn-db-6947f.firebaseapp.com",
  projectId: "crwn-db-6947f",
  storageBucket: "crwn-db-6947f.appspot.com",
  messagingSenderId: "404460912063",
  appId: "1:404460912063:web:0767032ba691d82ec7f50a",
  measurementId: "G-EFREDYCLK0",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
