import React from "react";
import { Link } from "react-router-dom";
import { 
    makeStyles, 
    Button,
} from "@material-ui/core";

// ESTILOS
const useStyles = makeStyles({
  containerHome: {
    textAlign: 'center',
  },
  linkStyle: {
    textDecoration: 'none',
    color: '#fff',
  }
});

const Login = () => {
  const classes = useStyles();

  return (
    <div className={classes.containerHome}>
      <h1>Inicio</h1>
      <Link className={classes.linkStyle} to="/CrearEncuesta">
        <Button variant="contained" color="primary">
          Crea tu encuesta aqui
        </Button> 
      </Link>
    </div>
  );
};

export default Login;