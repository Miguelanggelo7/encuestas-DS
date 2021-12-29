import { ref, set } from "firebase/database";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { database, auth } from "./config";

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

const register = async (email, password) => {
  try {
    await createUserWithEmailAndPassword(auth, email, password);
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

export { insertData, register, login, signOutUser };