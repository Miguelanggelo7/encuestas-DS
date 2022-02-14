import React from "react";
import { Link } from "react-router-dom";
import { 
    makeStyles, 
    Button,
    Divider,
} from "@material-ui/core";
import "./Home.css";
import {ReactComponent as GraphSVG} from "../img/graficos.svg";

// ESTILOS
const useStyles = makeStyles({
  containerHome: {
    textAlign: 'center',
  },
  title: {
    marginTop: '20pt',
    letterSpacing: '4px',
    fontSize: '2.2rem',
    color: '#444',
  },
  divStyle: {
    "@media (min-width: 1200px)": {
      marginTop: '120pt'
    },
    "@media (max-width: 1199.9px)": {
      marginTop: '200pt'
    },
  },
  graphSVG: {
    marginTop: '40pt',
    margin: 'auto',
    width: '90%',
    height: '200pt',
  }
});

const Login = () => {
  const classes = useStyles();

  return (
    <div className={classes.containerHome}>
      <h1 className={classes.title}>Inicio</h1>
      <Link id="crearButton" className="linkStyle" to="/CrearEncuesta">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        Crear encuesta
      </Link>
      <Link id="encuestasButton" className="linkStyle" to="/MisEncuestas">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        Mis Encuestas
      </Link>
      <br/>
      <Divider className={classes.divStyle}/>
      <h1 className={classes.title}>Mis estadisticas</h1>
      <GraphSVG class="image" className={classes.graphSVG}/>
    </div>
  );
};

export default Login;