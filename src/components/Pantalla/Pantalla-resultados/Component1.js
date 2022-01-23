import React from "react";
//import { Button } from "components";
import Button from '@mui/material/Button';
import styles from "./Component1.module.css";
import PieChart from './graphics/PieChart';



const Component1 = () => {
  return (
    <div className={styles.component1}>
      <div className={styles.rectangle1} />
        <div className={styles.chartPie}>
          <PieChart/>
        </div>
    
      <p className={styles.pregunta1TextoDeLaPreguntaSelec}>
        <strong
          className={
            styles.pregunta1TextoDeLaPreguntaSelecEmphasis0
          }
        >
          Pregunta 1: <br />
        </strong>
        &lt;Texto de la pregunta (Selección múltiple)&gt;
      </p>
      <div className={styles.button}>
        <Button variant="contained">Ver todas las respuestas</Button>
      </div>
    </div>
  );
};

export default Component1;

//Mostrar_opciones

// <div className={styles.flexWrapperOne}>
//   <div className={styles.relativeWrapperOne}>
//     <div className={styles.legends}>
//       <div className={styles.group21} />
//       <div className={styles.group23} />
//       <div className={styles.group22} />
//       <div className={styles.group20} />
//     </div>
//     <p className={styles.num40}>40%</p>
//     <p className={styles.num10}>10%</p>
//     <p className={styles.opcion3}>Opción 3</p>
//     <p className={styles.opcion1}>Opción 1</p>
//   </div>
//   <div className={styles.flexWrapperTwo}>
//     <div className={styles.relativeWrapperTwo}>
//       <p className={styles.num30}>30%</p>
//       <p className={styles.opcion2}>Opción 2</p>
//     </div>
//     <div className={styles.relativeWrapperTwo}>
//       <p className={styles.num30}>20%</p>
//       <p className={styles.opcion2}>Opción 4</p>
//     </div>
//   </div>
// </div>
