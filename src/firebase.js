import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDCMj3cFg1S6TtQr5qsN9oiWB8U5E7wvmI",
    authDomain: "raraa-bbca0.firebaseapp.com",
    databaseURL: "https://raraa-bbca0.firebaseio.com",
    projectId: "raraa-bbca0",
    storageBucket: "raraa-bbca0.appspot.com",
    messagingSenderId: "540896075604",
    appId: "1:540896075604:web:a102ea2ae64377b88f72c1",
    measurementId: "G-D725KTV3E1"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };