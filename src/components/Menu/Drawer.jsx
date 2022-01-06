import * as React from "react";
import { useRef, useEffect } from "react";
import { motion, useCycle } from "framer-motion";
import { useDimensions } from "./use-dimensions";
import { MenuToggle } from "./MenuToggle";
import { Navigation } from "./Navigation";

const sidebar = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2
    }
  }),
  closed: {
    clipPath: "circle(30px at 40px 40px)",
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 400,
      damping: 40
    }
  }
};

const Drawer = () => {
  const [isOpen, toggleOpen] = useCycle(false, true);
  const containerRef = useRef(null);
  const { height } = useDimensions(containerRef);

  useEffect(() => {
      return isOpen ? componentWillUnMount() : componentWillMount()
  }, [isOpen]);

  const componentWillMount = () => {  
    document.getElementById("blackground").style.transitionDelay = ".7s";
    document.getElementById("blackground").style.opacity = "0";
    document.getElementById("blackground").style.zIndex = "0";
    document.getElementById("drawer").style.transitionDelay = "1s";
    document.getElementById("drawer").style.zIndex = "1";
    document.getElementById("drawer").style.height = "55pt";
  }
  
  const componentWillUnMount = () => { 
    document.getElementById("blackground").style.transitionDelay = "0s";
    document.getElementById("blackground").style.opacity = "1";
    document.getElementById("blackground").style.zIndex = "997";
    document.getElementById("drawer").style.transitionDelay = "0s";
    document.getElementById("drawer").style.zIndex = "999";
    document.getElementById("drawer").style.height = "100%";

  }

  return (
    <motion.nav
      initial={false}
      animate={isOpen ? "open" : "closed"}
      custom={height}
      ref={containerRef}
      className="navDrawer"
      id="drawer"
    >
      <motion.div className="background" variants={sidebar} />
      <Navigation />
      <MenuToggle toggle={() => toggleOpen()} />
    </motion.nav>
  );
};

export default Drawer;