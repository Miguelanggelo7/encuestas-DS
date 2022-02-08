import React, { useEffect, useState } from "react";
import { 
    makeStyles,
    Paper,
    IconButton,
    InputBase,
    Divider
} from "@material-ui/core";
import {
  Search
} from "@mui/icons-material";
import { getSurveysByUser, getCurrentUid } from "../firebase/functions";
import GridMyForms from "../components/CardsForms/GridMyForms";

// ESTILOS
const useStyles = makeStyles({
  
});

const MyForms = () => {
  const classes = useStyles();

  // Si publicas y privadas = null, el usuario no ha creado ninguna encuesta
  const [surveys, setSurveys] = useState(null);

  useEffect(() => {
    const getData = async () => {
      const data = await getSurveysByUser(getCurrentUid());
      if (data) {
        setSurveys(Object.assign({}, data.publicas, data.privadas));
      }
    };

    getData();
  }, []); 

  return (
    <div style={{textAlign: 'center'}}>
      <div>
        {
          surveys ? 
          <GridMyForms surveys={surveys}/>
          : 
          <p>No hay nada flaco</p>
        }
      </div>
    </div>
  );
};

export default MyForms;