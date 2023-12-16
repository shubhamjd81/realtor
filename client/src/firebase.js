// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import dotenv from "dotenv";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCZOuCW4cPF6BAi3q1Ni6HZBob966 - b0uw",
  authDomain: "realtor-clone-react-7b684.firebaseapp.com",
  projectId: "realtor-clone-react-7b684",
  storageBucket: "realtor-clone-react-7b684.appspot.com",
  messagingSenderId: "42180664556",
  appId: "1:42180664556:web:18f1dccff7482828fb99c9",
};

// Initialize Firebase
initializeApp(firebaseConfig);

export const db = getFirestore();
