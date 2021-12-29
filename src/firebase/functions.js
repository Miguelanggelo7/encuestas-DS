import { ref, set } from "firebase/database"
import { database } from "./config"

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

const registerUser = async (user) => {

}

export { insertData };