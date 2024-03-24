// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBDABCEkkCk48TS2Rs-2DKxjxACIHB-X_Y",
  authDomain: "gate-blueprint-e7012.firebaseapp.com",
  projectId: "gate-blueprint-e7012",
  storageBucket: "gate-blueprint-e7012.appspot.com",
  messagingSenderId: "491059850681",
  appId: "1:491059850681:web:a06cfcaa3c33b79f8b5a68",
  measurementId: "G-CMBS0W6E0V"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(); 
