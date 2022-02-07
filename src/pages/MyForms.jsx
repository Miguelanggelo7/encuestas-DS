import React, { useEffect, useState } from "react";
import { getSurveysByUser, getCurrentUid } from "../firebase/functions";
import GridMyForms from "../components/CardsForms/GridMyForms";

const MyForms = () => {

  // Si publicas y privadas = null, el usuario no ha creado ninguna encuesta
  const [publicas, setPublicas] = useState(null);
  const [privadas, setPrivadas] = useState(null);

  useEffect(() => {
    const getData = async () => {
      const data = await getSurveysByUser(getCurrentUid());
      if (data) {
        setPublicas(data.publicas);
        setPrivadas(data.privadas);
      }
    };

    getData();
  }, []); 

  if (publicas && privadas) {
    console.log(publicas)
    console.log(privadas)
  }

  return (
    <div style={{textAlign: 'center'}}>
      <GridMyForms/>
    </div>
  );
};

export default MyForms;