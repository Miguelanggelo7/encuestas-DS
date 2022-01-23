import * as React from "react";
import { motion } from "framer-motion";
import { Home, Ballot, Search, FactCheck, Logout, PinDropSharp, FamilyRestroomOutlined } from "@mui/icons-material";
import { 
  makeStyles, 
} from "@material-ui/core";
import { signOutUser } from "../../firebase/functions";
import { Link } from "react-router-dom";

// ESTILOS
const useStyles = makeStyles({
  iconItem: {
    color: '#00D49C', 
    margin: 'auto',
     marginLeft: '6pt', 
     marginTop: '6pt',
  },
  iconItemExit: {
    color: '#FF005C', 
    margin: 'auto',
     marginLeft: '6pt', 
     marginTop: '6pt',
  },
  linkStyle: {
    textDecoration: 'none',
    color: '#000',
  },
});

const variants = {
  open: {
    y: 0,
    opacity: 1,
    display: 'flex',
    transition: {
      y: { stiffness: 1000, velocity: -100 }
    }
  },
  closed: {
    y: 50,
    opacity: 0,
    display: 'none',
    transition: {
      y: { stiffness: 1000 }
    }
  }
};

const variants2 = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 }
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 }
  }
};

const componentExit = () => {  
  document.getElementById("blackground").style.opacity = "0";
  document.getElementById("blackground").style.zIndex = "0";
  signOutUser();
}

const closeDrawer = () => {  
  document.getElementById("blackground").style.opacity = "0";
  document.getElementById("blackground").style.zIndex = "0";
}

export const Navigation = ({ toggle }) => {
  const classes = useStyles();
  return (
    <motion.ul variants={variants2} className="ulDrawer">
      <Link className={classes.linkStyle} to="/">
        <motion.li
          variants={variants}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="liDrawer"
          onClick={closeDrawer}
          onClick={toggle}
        >
          <div className="icon-placeholder" >
            <Home className={classes.iconItem}/>
          </div>
          <div className="text-placeholder" >
            Inicio
          </div>
        </motion.li>
      </Link>
      <motion.li
        variants={variants}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="liDrawer"
        onClick={closeDrawer}
          onClick={toggle}
      >
        <div className="icon-placeholder" >
          <Ballot className={classes.iconItem}/>
        </div>
        <div className="text-placeholder" >
          Mis encuestas
        </div>
      </motion.li>
      <Link className={classes.linkStyle} to="/BuscarEncuestas">
        <motion.li
          variants={variants}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="liDrawer"
          onClick={closeDrawer}
          onClick={toggle}
        >
          <div className="icon-placeholder" >
            <Search className={classes.iconItem}/>
          </div>
          <div className="text-placeholder" >
            Buscar Encuestas
          </div>
        </motion.li>
      </Link>
      <motion.li
        variants={variants}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="liDrawer"
      >
        <div className="icon-placeholder" >
          <FactCheck className={classes.iconItem}/>
        </div>
        <div className="text-placeholder" >
          Encuestas realizadas
        </div>
      </motion.li>
      <motion.li
        variants={variants}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="liDrawer"
        onClick={componentExit}
        onClick={toggle}
        id="cerrarSesionButton"
      >
        <div className="icon-placeholder" >
          <Logout className={classes.iconItemExit}/>
        </div>
        <div className="text-placeholder" >
          Cerrar Sesion
        </div>
      </motion.li>
    </motion.ul>
  );
};


