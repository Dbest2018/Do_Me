// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDs80kxnMi6qaJqtJLdvyqzDsAfyOSnBQM",
  authDomain: "todo-fem-1e68e.firebaseapp.com",
  projectId: "todo-fem-1e68e",
  storageBucket: "todo-fem-1e68e.appspot.com",
  messagingSenderId: "911528187990",
  appId: "1:911528187990:web:51637bbf49a95685a4c3f7",
  measurementId: "G-JNRMD2B07N",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
