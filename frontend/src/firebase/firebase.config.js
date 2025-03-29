// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAqk1AEIyF6d-iSD7d3dslX2NAbahC5gMA",
  authDomain: "e-bookstore-5b4ca.firebaseapp.com",
  projectId: "e-bookstore-5b4ca",
  storageBucket: "e-bookstore-5b4ca.firebasestorage.app",
  messagingSenderId: "949332695828",
  appId: "1:949332695828:web:118b7b8f44d10e44f80001",
  measurementId: "G-R1NH9XNJ2C"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth =  getAuth(app);

/* 
  // Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAqk1AEIyF6d-iSD7d3dslX2NAbahC5gMA",
  authDomain: "e-bookstore-5b4ca.firebaseapp.com",
  projectId: "e-bookstore-5b4ca",
  storageBucket: "e-bookstore-5b4ca.firebasestorage.app",
  messagingSenderId: "949332695828",
  appId: "1:949332695828:web:118b7b8f44d10e44f80001",
  measurementId: "G-R1NH9XNJ2C"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
*/