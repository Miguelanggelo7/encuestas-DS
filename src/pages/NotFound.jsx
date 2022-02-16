import React from "react";
import {ReactComponent as Notfound} from "../img/notfound.svg";
import { 
    makeStyles, 
} from "@material-ui/core";
import Drawer from "../components/Menu/Drawer"

// ESTILOS
const useStyles = makeStyles({
  containerSearch: {
    textAlign: 'center',
    marginTop: '30pt',
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

const NotFound = () => {
  const classes = useStyles();

  return (
    <div className={classes.containerSearch}>
        <Drawer />
        <Notfound class="image" className={classes.imgNoData}/>
        <h1 className={classes.title}>No se encontró la página</h1>
    </div>
  );
};

export default NotFound;