import { ref, set } from "firebase/database";
import { 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword, 
  signOut, 
  onAuthStateChanged 
} from "firebase/auth";
import {
  doc,
  collection,
  getDoc,
  setDoc
} from "firebase/firestore";

import { database, auth, firestore, storage} from "./config";

const insertData = async () => {
  try {
    await set(ref(database, "preguntas/usuario1"), {
      name: "jose",
      lastname: "saad",
      contesto: "yes"
    });
    
    alert("Funciono")
  } catch (err) {
    console.log(err)
  }
};

const register = async (email, password, data) => {
  try {
    await createUserWithEmailAndPassword(auth, email, password);
    await setDoc(doc(firestore, "usuarios", auth.currentUser.uid), data);
    
  } catch (err) {
    throw err;
  }
}

const login = async (email, password) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
  } catch (err) {
    throw err;
  }
}

const signOutUser = async () => {
  try {
    await signOut(auth);
  } catch (err) {
    throw err;
  }
}

const getCurrentUser = async () => {
  return auth.currentUser;
}

export { insertData, register, login, signOutUser, getCurrentUser, onAuthStateChanged };