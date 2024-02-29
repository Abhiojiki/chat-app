// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { collection, query, where, onSnapshot } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyChGFzeb5ZhozgKuLtxr7KWGbU0PTQAI3A",
  authDomain: "myfirstchatapp-ebc78.firebaseapp.com",
  projectId: "myfirstchatapp-ebc78",
  storageBucket: "myfirstchatapp-ebc78.appspot.com",
  messagingSenderId: "1008530970961",
  appId: "1:1008530970961:web:f9711eb95e38200d879b70",
  measurementId: "G-V9D0XWHWY1"
};


// Initialize Firebase

export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
const analytics = getAnalytics(app);
export const db = getFirestore();

