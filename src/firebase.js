import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyC3_rVy7y7qxFIbLLkBTdWLJHb_0z6lsh0",
  authDomain: "clone-e98f0.firebaseapp.com",
  projectId: "clone-e98f0",
  storageBucket: "clone-e98f0.appspot.com",
  messagingSenderId: "821798666464",
  appId: "1:821798666464:web:cd8197f93413f24daf1085",
  measurementId: "G-W99FJ2874Y",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
