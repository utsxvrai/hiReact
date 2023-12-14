// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"; //for storage in the database
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCqgb-d6C8ZLJsD5KhfZhofHpL-N2etBY0",
    authDomain: "gharlelo-21.firebaseapp.com",
    projectId: "gharlelo-21",
    storageBucket: "gharlelo-21.appspot.com",
    messagingSenderId: "23644577653",
    appId: "1:23644577653:web:a51cf2335ba74884867d3c",
    measurementId: "G-MR2Z2K3819"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app); 
