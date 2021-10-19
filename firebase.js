// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyC1S9D-yCMWtO973LNc22RLySavlhiE0pw",
    authDomain: "instagram-ajchavan.firebaseapp.com",
    projectId: "instagram-ajchavan",
    storageBucket: "instagram-ajchavan.appspot.com",
    messagingSenderId: "279170815104",
    appId: "1:279170815104:web:4a0f5b26927a4266b28265"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export { app, db, storage };