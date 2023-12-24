// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD76fZX61VpMURW8mXLexBACIDBztYKBBA",
  authDomain: "flexvyne.firebaseapp.com",
  projectId: "flexvyne",
  storageBucket: "flexvyne.appspot.com",
  messagingSenderId: "111140962765",
  appId: "1:111140962765:web:4a51e5156c127af775c484",
  measurementId: "G-8M52Q0DQMT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
const analytics = getAnalytics(app);