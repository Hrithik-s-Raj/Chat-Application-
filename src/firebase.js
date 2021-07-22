// For Firebase JS SDK v7.20.0 and later, measurementId is optional\

import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCM6UIe7peFere5BVBYJqsBC_WhpJQh2xk",
  authDomain: "slack-clone4.firebaseapp.com",
  projectId: "slack-clone4",
  storageBucket: "slack-clone4.appspot.com",
  messagingSenderId: "443625177648",
  appId: "1:443625177648:web:b0830d5f9ee8f0a195e3f5",
  measurementId: "G-QZPYXT4BKP",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
