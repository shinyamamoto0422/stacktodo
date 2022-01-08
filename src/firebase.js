import firebase from 'firebase/app';
import "firebase/firestore";
import "firebase/auth"
import "firebase/functions";

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyBoHrs0oFAQmvJbzPpdU6hEYY1YSyCyl2k",
  authDomain: "todolist-aa25f.firebaseapp.com",
  projectId: "todolist-aa25f",
  storageBucket: "todolist-aa25f.appspot.com",
  messagingSenderId: "249693032975",
  appId: "1:249693032975:web:1e7de0338816d69566c97a",
  measurementId: "G-PWB7E2HX3R"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = firebase.auth();
export const firestore = firebase.firestore();
export const functions = firebase.functions();

export default firebase;