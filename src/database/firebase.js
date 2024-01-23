import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.REACT_FIREBASE_KEY,
  authDomain: "chatterboxproject-c6826.firebaseapp.com",
  projectId: "chatterboxproject-c6826",
  storageBucket: "chatterboxproject-c6826.appspot.com",
  messagingSenderId: "1009412371528",
  appId: "1:1009412371528:web:bf6c227da85787e4d8947d",
  measurementId: "G-SHEXWV7QJ5",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore(app);
