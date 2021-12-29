// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getAuth } from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDKCEi0KY6bW6ytmaaOVIerpiN0h9avTiY",
  authDomain: "encuestas-db-f6c45.firebaseapp.com",
  projectId: "encuestas-db-f6c45",
  storageBucket: "encuestas-db-f6c45.appspot.com",
  messagingSenderId: "397717582736",
  appId: "1:397717582736:web:0ffc517bbf7b3ef6093915"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//
const database = getDatabase(app);
const auth = getAuth(app);

export { database, auth };