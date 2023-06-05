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
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
  measurementId: process.env.REACT_APP_MEASUREMENT_ID,
};
// firebase.analytics();
firebase.initializeApp(firebaseConfig);
const storage = firebase.storage();
export { storage, firebase as default };
