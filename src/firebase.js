// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from 'firebase/storage';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBuYp_2nrFTwLHFVJLIRnfNJi-KBp9jOLw",
  authDomain: "amazingtrip-277c1.firebaseapp.com",
  projectId: "amazingtrip-277c1",
  storageBucket: "amazingtrip-277c1.appspot.com",
  messagingSenderId: "965250000563",
  appId: "1:965250000563:web:d17e4fcb51bb94799032c6",
  measurementId: "G-2NSQWHH7V0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const storage = getStorage(app);