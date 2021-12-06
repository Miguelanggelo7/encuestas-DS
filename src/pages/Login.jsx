import React, {useEffect, useRef} from "react";
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
    marginTop: "100pt",
  },
  registersvg: {
    width: "300px",
    height: "300px",
    transition: "transform 1.1s ease-in-out",
    transitionDelay: "0.4s",
    marginTop: "160pt",
    marginLeft: "400pt",
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

  const sign_in_btn = document.querySelector("#sign-in-btn");
  const sign_up_btn = document.querySelector("#sign-up-btn");
  const container = document.querySelector(".container");
  
  sign_up_btn.addEventListener("click", () => {
    container.classList.add("sign-up-mode");
  });

  sign_in_btn.addEventListener("click", () => {
    container.classList.remove("sign-up-mode");
  });

  return (
    <div className={classes.containerLogin}>
      <div class="container">
        <div class="forms-container">
          <div class="signin-signup">
            <form action="#" class="sign-in-form">
              <h2 class="title">Sign in</h2>
              <div class="input-field">
                <PersonOutlined className={classes.inputIcon}/>
                <input type="text" placeholder="Usuario" />
              </div>
              <div class="input-field">
                <LockOutlined className={classes.inputIcon}/>
                <input type="password" placeholder="Contraseña" />
              </div>
              <input type="submit" value="Login" class="btn solid" />
            </form>
            <form action="#" class="sign-up-form">
              <h2 class="title">Sign up</h2>
              <div class="input-field">
                <PersonOutlined className={classes.inputIcon}/>
                <input type="text" placeholder="Usuario" />
              </div>
              <div class="input-field">
                <EmailOutlined className={classes.inputIcon}/>
                <input type="email" placeholder="Email" />
              </div>
              <div class="input-field">
                <LockOutlined className={classes.inputIcon}/>
                <input type="password" placeholder="Contraseña" />
              </div>
              <input type="submit" class="btn" value="Sign up" />
            </form>
          </div>
        </div>

        <div class="panels-container">
          <div class="panel left-panel">
            <div class="content">
              <h3>New here ?</h3>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis,
                ex ratione. Aliquid!
              </p>
              <button class="btn transparent" id="sign-up-btn">
                Sign up
              </button>
            </div>
            <RegisterSVG class="image" className={classes.registersvg}/>
          </div>
          <div class="panel right-panel">
            <div class="content">
              <h3>One of us ?</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
                laboriosam ad deleniti.
              </p>
              <button class="btn transparent" id="sign-in-btn">
                Sign in
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