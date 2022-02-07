import { ref as refDb, set, onValue, get, child, getDatabase} from "firebase/database";
import { getDownloadURL, ref as refSt, uploadBytes } from "firebase/storage";
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

const saveSurvey = async (surveyId, isPublic, data) => {
  try {
    const refSurvey = refDb(database, `usuarios/${auth.currentUser.uid}/${isPublic ? "publicas":"privadas"}/${surveyId}`);
    await set(refSurvey, data);

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

const getSurveysByUser =  async (id) => {
  const surveys = await get(child(refDb(getDatabase()), `usuarios/${id}`));
  const data = await surveys.val();
  return data;
}

// const getSurveyById =async  (id) => {
//   const data = await get(child(refDb(getDatabase()), `usuarios/${auth.currentUser}/encuestas/${id}`));
//   const res = await data.val();
//   return res;
// }

const getPublicSurveys = async  () => {
  const usuariosData = await get(child(refDb(getDatabase()), `usuarios/`));
  const usuarios = await usuariosData.val();
  return usuarios
}

const saveSurveyImage = async (surveyId, img) => {
  const refImg = refSt(storage, `encuestas/${surveyId}/`);
  await uploadBytes(refImg, img, { contentType: img.type });
  
  const url = await getDownloadURL(refImg);

  return url;
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

const getCurrentUid = () => {
  return auth.currentUser.uid;
}

export { 
  saveSurvey, 
  register, 
  login, 
  signOutUser, 
  getCurrentUid, 
  onAuthStateChanged,
  getSurveysByUser,
  saveSurveyImage,
  getPublicSurveys
  // getSurveyById,
  
};