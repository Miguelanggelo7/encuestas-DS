import React from 'react';
import './encuesta-realizada.css';
import MaterialTable from "material-table-formik";

const data = [
  {ID: 'id', titulo: 'titulo', fecha_creacion: 'fecha_creacion', fecha_cierre: 'fecha_cierre', completada:'0 '+'veces'}
]

const columns = [
  {title: 'ID', field: "ID"},
  {title: 'Título', field: "titulo"},
  {title: 'Fecha Creación', field: "fecha_creacion"},
  {title: 'Fecha Cierre', field: "fecha_cierre"},
  {title: 'Completada', field: "completada"},
]

function EncuestaRealizada () {
  return (
    <div style={{position: 'absolute',left: 520, height: 400, width: 820, fontSize: 15 }}>
      <MaterialTable
        title = "Encuestas Realizadas"
        data = {data}
        columns = {columns}
        options={{
          filtering: true
        }}
      />
    </div>
  );
}

export default EncuestaRealizada;
