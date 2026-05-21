// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = JSON.parse(import.meta.env.VITE_FIREBASE_CONFIG);

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db=getFirestore(app);

