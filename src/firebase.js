import firebase from 'firebase/compat/app';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from 'firebase/storage';
import 'firebase/compat/analytics'; //them compat cho version 9
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
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
const firebaseConfig1 = {
  apiKey: "AIzaSyDBI4Rqp1ye2uGF4cE6etKwk2zr8aOe-3E",
  authDomain: "notification-95f54.firebaseapp.com",
  projectId: "notification-95f54",
  storageBucket: "notification-95f54.appspot.com",
  messagingSenderId: "557323813693",
  appId: "1:557323813693:web:af406fdbec8fc7e78bfb54",
  measurementId: "G-KRQ85H8N2P"
};
// Initialize Firebase

const app = firebase.initializeApp(firebaseConfig);
firebase.analytics();
const auth = firebase.auth();
const db = firebase.firestore();

export const storage = getStorage(app);
export {auth, db};
export default firebase;