// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAJKU3DQieH-DyPjxPrg2-cFVC6s77rdZY",
  authDomain: "raz-website.firebaseapp.com",
  databaseURL: "https://raz-website-default-rtdb.firebaseio.com",
  projectId: "raz-website",
  storageBucket: "raz-website.appspot.com",
  messagingSenderId: "404190164382",
  appId: "1:404190164382:web:6fb6d2d1810335d225d28f",
  measurementId: "G-JMSY069DWZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);