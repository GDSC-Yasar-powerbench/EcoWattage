// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBJoPsJsSWMLXhfpe1I9OjwdMTg10h6HDA",
    authDomain: "solution-challenge-gdsc.firebaseapp.com",
    projectId: "solution-challenge-gdsc",
    storageBucket: "solution-challenge-gdsc.appspot.com",
    messagingSenderId: "98393891847",
    appId: "1:98393891847:web:9a57238eb7d055bd7236a2",
    measurementId: "G-EQWTNQXP9P"
};

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);
export const firestore = getFirestore(firebaseApp)
