// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.2/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.9.2/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDiq6mMeZuOX2I9r3TsgEgov7Qw2Wv11w8",
  authDomain: "prueba-ad085.firebaseapp.com",
  projectId: "prueba-ad085",
  storageBucket: "prueba-ad085.appspot.com",
  messagingSenderId: "759821994917",
  appId: "1:759821994917:web:bc1b386e4880b02d5fb64c",
  measurementId: "G-KDXXSKNJZ7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);