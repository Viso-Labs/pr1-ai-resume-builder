// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDBI8J_Js1eCGYcESkQRp7lLbaM767n03I",
  authDomain: "resume-builder-66a49.firebaseapp.com",
  projectId: "resume-builder-66a49",
  storageBucket: "resume-builder-66a49.appspot.com",
  messagingSenderId: "927068925519",
  appId: "1:927068925519:web:9c79076f181db94750c43a",
  measurementId: "G-ZSK0XL17ZH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const firestoredb = getFirestore(app);
export const storage = getStorage(app);