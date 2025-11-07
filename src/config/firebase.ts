// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore/lite";
import { getFunctions } from "firebase/functions";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCNW7gicm0NqOdAH_jtf8WTAXxXr5l4PoY",
  authDomain: "debugro-4c3e4.firebaseapp.com",
  projectId: "debugro-4c3e4",
  storageBucket: "debugro-4c3e4.firebasestorage.app",
  messagingSenderId: "487839448655",
  appId: "1:487839448655:web:f9126b1db082b9a418743a",
  measurementId: "G-RRKSF7WJ9P"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const fbFunctions = getFunctions(app);

const analytics = getAnalytics(app);