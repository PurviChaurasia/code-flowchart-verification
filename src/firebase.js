// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBYtrN56j5uKq3QYiGgeIkrzgdJ2Or30Lo",
  authDomain: "code-flowchart.firebaseapp.com",
  projectId: "code-flowchart",
  storageBucket: "code-flowchart.appspot.com",
  messagingSenderId: "47986895177",
  appId: "1:47986895177:web:5ddf24334453658a959298",
  measurementId: "G-XJ80Q0MXBR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Realtime Database and get a reference to the service
export const database = getDatabase(app);

