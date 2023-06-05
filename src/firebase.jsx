import "firebase/compat/storage";
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
// import "firebase/analytics";

// const dotenv = require("dotenv"); //hides all sensitive data
// dotenv.config({ path: "../.env" });
// import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID,
};
// firebase.analytics();
firebase.initializeApp(firebaseConfig);
const storage = firebase.storage();
export default storage;
