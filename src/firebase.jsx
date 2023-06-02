import "firebase/compat/storage";
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
// const dotenv = require("dotenv"); //hides all sensitive data
// dotenv.config({ path: "../.env" });
// import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBg_Xevdd4FSAoiz0VVgBUxjHyv1ezyoOM",
  authDomain: "vtgradimages.firebaseapp.com",
  projectId: "vtgradimages",
  storageBucket: "vtgradimages.appspot.com",
  messagingSenderId: "520538381773",
  appId: "1:520538381773:web:f0e420b8b1f6b8bfa4f884",
  measurementId: "G-BZJLVD09JZ",
};

firebase.initializeApp(firebaseConfig);
const storage = firebase.storage();
export default storage;
