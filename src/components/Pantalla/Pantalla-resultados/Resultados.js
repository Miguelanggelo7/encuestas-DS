import React from "react";
import "./Resultados.css";
import Component1 from "./Component1.js";
import Component2 from "./Component2.js";


function Resultados (){
  return (
    <div >
      <h1 className = "Titulo_Resultado">
        Resultados Encuesta #
      </h1>
      <div className = "Rectangle1">
        <Component1/>
      </div>
      <div className = "Rectangle2">
        <Component2/>
      </div>
    </div>
  );
}

export default Resultados;
