import React, {useEffect, useState} from "react";
import { Link } from "react-router-dom";
import { 
    makeStyles, 
} from "@material-ui/core";
import GridForms from "../components/CardsForms/GridForms";
import { getPublicSurveys } from "../firebase/functions"; 
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

const SearchForms = () => {
  const classes = useStyles();
  const [surveys, setSurveys] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {
      const data = await getPublicSurveys();
      setSurveys(data);
      setLoading(false);
    }

    getData();
  }, []);

  return (
    <div className={classes.containerSearch}>
        {
          loading ? 
            <div style={{marginTop: '50pt'}}>
              <CircularProgress style={{margin: 'auto'}}/>
            </div>
          : (
            surveys ? 
            <GridForms surveys={surveys}/>
            : 
            <div style={{marginTop: '50pt'}}>
              <NoData class="image" className={classes.imgNoData}/>
              <h1 className={classes.title}>No se encontraron encuestas públicas</h1>
            </div>
          )
        }
    </div>
  );
};

export default SearchForms;