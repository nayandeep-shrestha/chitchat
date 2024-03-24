// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAEVW-SA96a2Jesxd5Ilio68uBQaxAauTo",
  authDomain: "chat-app-d67ab.firebaseapp.com",
  projectId: "chat-app-d67ab",
  storageBucket: "chat-app-d67ab.appspot.com",
  messagingSenderId: "687079177938",
  appId: "1:687079177938:web:e991aa30eff42bee10f70b",
  measurementId: "G-435TKXK775"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);