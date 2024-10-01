// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "ai-trip-planner-dc71c.firebaseapp.com",
  projectId: "ai-trip-planner-dc71c",
  storageBucket: "ai-trip-planner-dc71c.appspot.com",
  messagingSenderId: "727836973",
  appId: "1:727836973:web:05ce1c6bb9d319a03f4ba4",
  measurementId: "G-TCFN6M0MBD"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db=getFirestore(app);
// const analytics = getAnalytics(app);