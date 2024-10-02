// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-f7009.firebaseapp.com",
  projectId: "mern-estate-f7009",
  storageBucket: "mern-estate-f7009.appspot.com",
  messagingSenderId: "599343666237",
  appId: "1:599343666237:web:b1c92edf61a8aee7c0c654",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
