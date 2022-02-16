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
import { CircularProgress } from "@mui/material";
import {ReactComponent as NoData} from "../img/nodata.svg";

// ESTILOS
const useStyles = makeStyles({
  containerSearch: {
    textAlign: 'center',
  },
  imgNoData: {
    marginTop: '40pt',
    margin: 'auto',
    width: '90%',
    height: '200pt',
  },
  title: {
    marginTop: '20pt',
    letterSpacing: '4px',
    fontSize: '2.2rem',
    color: '#444',
  },
});

const MyForms = () => {
  const classes = useStyles();

  // Si publicas y privadas = null, el usuario no ha creado ninguna encuesta
  const [surveys, setSurveys] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {
      const data = await getSurveysByUser(getCurrentUid());
      if (data) {
        console.log(data)
        for (let key in data.privadas) {
          data.privadas[key].id = key;
          data.privadas[key].state = "private";
        }
        for (let key in data.publicas) {
          data.publicas[key].id = key;
        }
        console.log(data)
        setSurveys(Object.assign({}, data.publicas, data.privadas));
      }
      setLoading(false);
    };

    getData();
  }, []); 

  return (
    <div className={classes.containerSearch}>
      <div>
      {
          loading ? 
            <div style={{marginTop: '50pt'}}>
              <CircularProgress style={{margin: 'auto'}}/>
            </div>
          : (
            surveys ? 
            <GridMyForms surveys={surveys}/>
            : 
            <div style={{marginTop: '50pt'}}>
              <NoData class="image" className={classes.imgNoData}/>
              <h1 className={classes.title}>Al parecer no has creado ninguna encuesta</h1>
            </div>
          )
        }
      </div>
    </div>
  );
};

export default MyForms;