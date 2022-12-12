// Import the functions you need from the SDKs you need
import { initializeFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAUZjbnvPgqOQHIuRZS9dyO7NCdElVbBzM",
  authDomain: "todo-expo-7a68b.firebaseapp.com",
  projectId: "todo-expo-7a68b",
  storageBucket: "todo-expo-7a68b.appspot.com",
  messagingSenderId: "825240910586",
  appId: "1:825240910586:web:c0197ee6e0e69a045ee743"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = initializeFirestore(app, {
    experimentalForceLongPolling: true
})

export { db }