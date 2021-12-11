import * as React from "react";
import { motion } from "framer-motion";
import { ContentPasteGoOutlined, HomeOutlined } from "@mui/icons-material";
import { 
  makeStyles, 
} from "@material-ui/core";
import ListItemText from '@mui/material/ListItemText';


// ESTILOS
const useStyles = makeStyles({
  iconItem: {
    color: '#00D49C', 
    margin: 'auto',
     marginLeft: '6pt', 
     marginTop: '6pt',
  }
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

export const Navigation = () => {
  const classes = useStyles();
  return (
    <motion.ul variants={variants2} className="ulDrawer">
      <motion.li
        variants={variants}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="liDrawer"
      >
        <div className="icon-placeholder" >
          <HomeOutlined className={classes.iconItem}/>
        </div>
        <div className="text-placeholder" >
          Inicio
        </div>
      </motion.li>
      <motion.li
        variants={variants}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="liDrawer"
      >
        <div className="icon-placeholder" >
          <HomeOutlined className={classes.iconItem}/>
        </div>
        <div className="text-placeholder" >
          Inicio
        </div>
      </motion.li>
      <motion.li
        variants={variants}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="liDrawer"
      >
        <div className="icon-placeholder" >
          <HomeOutlined className={classes.iconItem}/>
        </div>
        <div className="text-placeholder" >
          Inicio
        </div>
      </motion.li>
    </motion.ul>
  );
};


