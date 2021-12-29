import React, {useEffect, useRef, useState} from "react";
import { 
    makeStyles, 
} from "@material-ui/core";
import {ReactComponent as FormSVG} from "../img/forms.svg";
import {ReactComponent as RegisterSVG} from "../img/register.svg";
import './Login.css';
import {
  PersonOutlined,
  LockOutlined,
  EmailOutlined,
} from "@mui/icons-material";
import { motion } from "framer-motion";
import { register, login } from "../firebase/functions";

// ESTILOS
const useStyles = makeStyles({
  inputIcon: {
    margin: 'auto',
    color: '#333',
  },
  formsvg: {
    width: "200px",
    height: "200px",
    transition: "transform 1.1s ease-in-out",
    transitionDelay: "0.4s",
  },
  registersvg: {
    width: "300px",
    height: "300px",
    transition: "transform 1.1s ease-in-out",
    transitionDelay: "0.4s",
    marginTop: "10%",
  },
  "@media (max-width: 870px)": {
    formsvg: {
      width: "200px",
      transition: "transform 0.9s ease-in-out",
      transitionDelay: "0.6s",
    },
    registersvg: {
      width: "200px",
      transition: "transform 0.9s ease-in-out",
      transitionDelay: "0.6s",
    },
  },
  "@media (max-width:   1360px)": {
    formsvg: {
      display: "none",
    },
    registersvg: {
      display: "none",
    },
  },
  "@media (max-width: 570px)": {
    formsvg: {
      display: "none",
    },
    registersvg: {
      display: "none",
    },
  },
  
});

const Login = () => {
  const classes = useStyles();
  const [ name, setName ] = useState("");
  const [ registerEmail, setRegisterEmail ] = useState("");
  const [ registerPassword, setRegisterPassword ] = useState("");
  const [ loginEmail, setLoginEmail ] = useState("");
  const [ loginPassword, setLoginPassword ] = useState("");

  useEffect(() => {
    myfunction();
  }, []);
  

  const icon = {
    hidden: {
      opacity: 0,
      pathLength: 0,
      fill: "rgba(255, 255, 255, 0)"
    },
    visible: {
      opacity: 1,
      pathLength: 1,
      fill: "#0185B6"
    },
    visible2: {
      opacity: 1,
      pathLength: 1,
      fill: "#FDDF03"
    },
    visible3: {
      opacity: 1,
      pathLength: 1,
      fill: "#00D49C"
    }
  };

  const myfunction = () => {
    const sign_in_btn = document.querySelector("#sign-in-btn");
    const sign_up_btn = document.querySelector("#sign-up-btn");
    const container = document.querySelector(".container");
    
    sign_up_btn.addEventListener("click", () => {
      container.classList.add("sign-up-mode");
    });

    sign_in_btn.addEventListener("click", () => {
      container.classList.remove("sign-up-mode");
    });
  }



  const registerUser = async () => {
    try {
      await register(registerEmail, registerPassword);
    } catch (err) {
      // TODO: Handle error
      alert("Ha ocurrido un error");
    }
  }

  const loginUser = async () => {
    try {
      await login(loginEmail, loginPassword);
    } catch (err) {
      // TODO: Handle error
      alert("Ha ocurrido un error");
    }
  }

  return (
    <div className={classes.containerLogin}>
      <div class="container">
        <div class="forms-container">
          <div class="signin-signup">
            <form action="#" class="sign-in-form">
              <h2 class="title">Iniciar Sesión</h2>
              <div class="input-field">
                <PersonOutlined className={classes.inputIcon}/>
                <input 
                  type="text" placeholder="Correo eléctronico"  value={ loginEmail }
                  onChange={(event) => setLoginEmail(event.target.value)}
                />
              </div>
              <div class="input-field">
                <LockOutlined className={classes.inputIcon}/>
                <input 
                  type="password" placeholder="Contraseña" value={ loginPassword }
                  onChange={(event) => setLoginPassword(event.target.value)}
                />
              </div>
              <input type="button" value="Ingresar" class="btn solid" onClick={loginUser}/>
            </form>
            <form action="#" class="sign-up-form">
              <h2 class="title">Registrarse</h2>
              <div class="input-field">
                <PersonOutlined className={classes.inputIcon}/>
                <input 
                  type="text" placeholder="Nombre y apellido" value={ name }
                  onChange={(event) => setName(event.target.value)}
                />
              </div>
              <div class="input-field">
                <EmailOutlined className={classes.inputIcon}/>
                <input 
                  type="email" placeholder="Correo eléctronico" value={ registerEmail }
                  onChange={(event) => setRegisterEmail(event.target.value)}
                />
              </div>
              <div class="input-field">
                <LockOutlined className={classes.inputIcon}/>
                <input 
                  type="password" placeholder="Contraseña"  value={ registerPassword }
                  onChange={(event) => setRegisterPassword(event.target.value)}
                />
              </div>
              <input type="button" class="btn" value="Registrarse" onClick={registerUser}/>
            </form>
          </div>
        </div>

        <div class="panels-container">
          <div class="panel left-panel">
            <div class="content">
              <div className="container-svg-ucab-logo">
                <motion.svg
                  xmlns="http://www.w3.org/2010/svg"
                  viewBox="0 0 139 128"
                  className="item"
                >
                  <motion.path
                    d="M69.5 19L88.9856 41.5V86.5L69.5 109L50.0144 86.5V41.5L69.5 19Z"
                    stroke="#fff"
                    stroke-width="3"
                    fill="#0185B6"
                    variants={icon}
                    initial="hidden"
                    animate="visible"
                    transition={{
                      default: { duration: 6, ease: "easeInOut" },
                      fill: { duration: 7, ease: [1, 0, 0.8, 1] }
                    }}
                  />
                  <motion.path
                    d="M114.5 19L133.986 41.5V86.5L114.5 109L95.0144 86.5V41.5L114.5 19Z"
                    stroke="#fff"
                    stroke-width="3"
                    fill="#0185B6"
                    variants={icon}
                    initial="hidden"
                    animate="visible3"
                    transition={{
                      default: { duration: 6, ease: "easeInOut" },
                      fill: { duration: 7, ease: [1, 0, 0.8, 1] }
                    }}
                  />
                  <motion.path
                    d="M24.5 19L43.9856 41.5V86.5L24.5 109L5.01443 86.5V41.5L24.5 19Z"
                    stroke="#fff"
                    stroke-width="3"
                    fill="#0185B6"
                    variants={icon}
                    initial="hidden"
                    animate="visible2"
                    transition={{
                      default: { duration: 6, ease: "easeInOut" },
                      fill: { duration: 7, ease: [1, 0, 0.8, 1] }
                    }}
                  />
                </motion.svg>
              </div>
              <p>
                La mejor herramienta para creación, edición y manejo de encuestas.
                <br/>
                <br/>
                ¿Eres nuevo? ¡Registrate aquí!
              </p>
              <button class="btn transparent" id="sign-up-btn"
                onClick={() => {
                  setLoginEmail("");
                  setLoginPassword("");
                }}
              >
                Registrarse
              </button>
            </div>
            <RegisterSVG class="image" className={classes.registersvg}/>
          </div>
          <div class="panel right-panel">
            <div class="content">
              <div className="container-svg-ucab-logo">
                <motion.svg
                  xmlns="http://www.w3.org/2010/svg"
                  viewBox="0 0 139 128"
                  className="item"
                >
                  <motion.path
                    d="M69.5 19L88.9856 41.5V86.5L69.5 109L50.0144 86.5V41.5L69.5 19Z"
                    stroke="#fff"
                    stroke-width="3"
                    fill="#0185B6"
                    variants={icon}
                    initial="hidden"
                    animate="visible"
                    transition={{
                      default: { duration: 6, ease: "easeInOut" },
                      fill: { duration: 7, ease: [1, 0, 0.8, 1] }
                    }}
                  />
                  <motion.path
                    d="M114.5 19L133.986 41.5V86.5L114.5 109L95.0144 86.5V41.5L114.5 19Z"
                    stroke="#fff"
                    stroke-width="3"
                    fill="#0185B6"
                    variants={icon}
                    initial="hidden"
                    animate="visible3"
                    transition={{
                      default: { duration: 6, ease: "easeInOut" },
                      fill: { duration: 7, ease: [1, 0, 0.8, 1] }
                    }}
                  />
                  <motion.path
                    d="M24.5 19L43.9856 41.5V86.5L24.5 109L5.01443 86.5V41.5L24.5 19Z"
                    stroke="#fff"
                    stroke-width="3"
                    fill="#0185B6"
                    variants={icon}
                    initial="hidden"
                    animate="visible2"
                    transition={{
                      default: { duration: 6, ease: "easeInOut" },
                      fill: { duration: 7, ease: [1, 0, 0.8, 1] }
                    }}
                  />
                </motion.svg>
              </div>
              <p>
                ¿Ya tienes cuenta? ¡Inicia sesión aquí!
              </p>
              <button class="btn transparent" id="sign-in-btn" 
                onClick={() => {
                  setRegisterEmail("");
                  setRegisterPassword("");
                  setName("");
                }}
              >
                Iniciar Sesión
              </button>
            </div>
            <FormSVG class="image" className={classes.formsvg}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;