import React from "react";
//import { Button } from "components";
import Button from '@mui/material/Button';
import styles from "./Component2.module.css";

const Component2 = () => {
  return (
    <div className={styles.component2}>
      <div className={styles.rectangle2} />
      <p className={styles.pregunta2TextoDeLaPreguntaPregu}>
        <strong
          className={
            styles.pregunta2TextoDeLaPreguntaPreguEmphasis0
          }
        >
          Pregunta 2: <br />
        </strong>
        &lt;Texto de la pregunta (Preguntas que requieran
        escribir en cuadro de texto)&gt;
      </p>

      <p className={styles.respuestasMasRecientes}>
        Respuestas más recientes:
      </p>
      <div className={styles.group811}>
        <div className={styles.rectangle3} />
          <p
            className={
              styles.xdxdxdxdxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
            }
          >
            xdxdxdxdxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx...
          </p>
          <p className={styles.correo}>&lt;Correo&gt;</p>
      </div>
      <div className={styles.group812}>
        <div className={styles.rectangle3} />
          <p
            className={
              styles.xdxdxdxdxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
            }
          >
            xdxdxdxdxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx...
          </p>
          <p className={styles.correo}>&lt;Correo&gt;</p>
      </div>
      <div className={styles.group813}>
        <div className={styles.rectangle3} />
          <p
            className={
              styles.xdxdxdxdxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
            }
          >
            xdxdxdxdxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx...
          </p>
          <p className={styles.correo}>&lt;Correo&gt;</p>
      </div>
      <div className={styles.button}>
        <Button variant="contained">Ver todas las respuestas</Button>
      </div>
    </div>
  );
};

export default Component2;


// <div className={styles.group811}>
//   <div className={styles.rectangle3} />
//   <p
//     className={
//       styles.xdxdxdxdxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
//     }
//   >
//     xdxdxdxdxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx...
//   </p>
//   <p className={styles.correo}>&lt;Correo&gt;</p>
// </div>
// <div className={styles.group812}>
//   <div className={styles.rectangle3} />
//   <p
//     className={
//       styles.xdxdxdxdxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxTwo
//     }
//   >
//     xdxdxdxdxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx...
//   </p>
//   <p className={styles.correoTwo}>&lt;Correo&gt;</p>
// </div>
// <div className={styles.group811Two}>
//   <div className={styles.rectangle3} />
//   <p
//     className={
//       styles.xdxdxdxdxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxThree
//     }
//   >
//     xdxdxdxdxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx...
//   </p>
//   <p className={styles.correoThree}>&lt;Correo&gt;</p>
// </div>
// <p className={styles.respuestasMasRecientes}>
//   Respuestas más recientes:
// </p>
