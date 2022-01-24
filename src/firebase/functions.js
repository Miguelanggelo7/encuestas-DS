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
import { v4 as uuid } from "uuid";
import { database, auth, firestore, storage} from "./config";

const saveSurvey = async (data) => {
  try {
    const surveyId = uuid();
    console.log(data)
    await set(ref(database, `usuarios/${auth.currentUser.uid}/encuestas/${surveyId}`), data);

  } catch (err) {
    throw err;
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

export { saveSurvey, register, login, signOutUser, getCurrentUser, onAuthStateChanged };