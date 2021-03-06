import { ref as refDb, set, onValue, get, child, getDatabase, remove} from "firebase/database";
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
  setDoc,
  getFirestore
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

const deleteSurvey = async (id, state) => {
  try {
    await remove(refDb(getDatabase()), `usuarios/${auth.currentUser.uid}/${state}/${id}`);
  } catch (err) {
    throw err;
  }
}

const getSurveyById = async  (id, user, state) => {
  const data = await get(child(refDb(getDatabase()), `usuarios/${user}/${state}/${id}`));
  const res = await data.val();
  return res;
}

const getPublicSurveys = async  () => {
  const usuariosData = await get(child(refDb(getDatabase()), `usuarios/`));
  const usuarios = await usuariosData.val();
  const data = [];

  for (let key in usuarios) {
    if(usuarios[key].publicas){
      const userData = await getDoc(doc(getFirestore(), "usuarios", key));

      for(let key1 in usuarios[key].publicas) {
        try {
          const image = await getDownloadURL(refSt(storage, `encuestas/${key1}`));
          usuarios[key].publicas[key1].image = image;
        } catch (err) {
          if(err.code !== "storage/object-not-found"){
            throw err;
          }
        }

        usuarios[key].publicas[key1].id = key1;
        usuarios[key].publicas[key1].userId = key;
        usuarios[key].publicas[key1].name = userData.data().name;
        data.push(usuarios[key].publicas[key1])
      }
    }
  }

  return data;
}

const getAnswerById = async (owner, surveyId, userId, state) => {
  try {
    await get(child(refDb(getDatabase()), 
    `usuarios/${owner}/${state}/${surveyId}/respuestas/${userId}`));

    return true;
  } catch (err) {
    return false;
  }
}

const saveAnswers = async (answers, userId, surveyId, state) => {
  if (await getAnswerById(userId, surveyId, auth.currentUser.uid, state)) {
    throw 'previously-completed';
  }

  try {
    const refSurvey = refDb(getDatabase(), 
      `usuarios/${userId}/${state}/${surveyId}/respuestas/${auth.currentUser.uid}`
    );
    await set(refSurvey, answers);
  } catch (err) {
    throw err;
  }
}

const getAnswersBySurvey = async (survey) => {
  const answersData = await get(child(refDb(getDatabase()), 
  `usuarios/${survey.state}/${survey.userId}/respuestas`
  ));
  const answers = await answersData.val();
  const data = [];
  return answers;
  // for (let key in answers) {
  //   if(usuarios[key].publicas){
  //     const userData = await getDoc(doc(getFirestore(), "usuarios", key));

  //     for(let key1 in usuarios[key].publicas) {
  //       try {
  //         const image = await getDownloadURL(refSt(storage, `encuestas/${key1}`));
  //         usuarios[key].publicas[key1].image = image;
  //       } catch (err) {
  //         if(err.code !== "storage/object-not-found"){
  //           throw err;
  //         }
  //       }

  //       usuarios[key].publicas[key1].id = key1;
  //       usuarios[key].publicas[key1].userId = key;
  //       usuarios[key].publicas[key1].name = userData.data().name;
  //       data.push(usuarios[key].publicas[key1])
  //     }
  //   }
  // }

  // return data;
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
  getPublicSurveys,
  getSurveyById,
  saveAnswers,
  getAnswersBySurvey,
  deleteSurvey
};