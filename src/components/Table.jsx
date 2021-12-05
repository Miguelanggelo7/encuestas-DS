import React, { useState } from "react";
import MaterialTable from "material-table-formik";
import { makeStyles } from "@material-ui/core";
import {
  AddOutlined,
  DeleteOutlined,
  EditOutlined,
  SearchOutlined,
} from "@mui/icons-material";
import Fade from "react-reveal/Fade";
import {
    RiFileExcel2Line
} from "react-icons/ri";
import XLSX from "xlsx";

// ESTILOS
const useStyles = makeStyles({
  toolbar: {
    fontFamily: "quicksand",
  },
  table: {
    marginBottom: "20pt",
  },
  icono: {
    color: "#787878",
  },
  excelIcon: {
    color: "#00d49c"
  },
});

export default function Table({
  title,
  selection,
  ...props
}) {
  const classes = useStyles();

  const Title = <h1>{title}</h1>;

  const styleTable = { fontFamily: "quicksand" };

  const pageSize = [5, 10, 20];

  const downloadExcel = () =>{
    const newData = props.data.map(row=>{
        delete row.tableData
        return row
    })
    const workSheet = XLSX.utils.json_to_sheet(newData)
    const workBook = XLSX.utils.book_new()
    XLSX.utils.book_append_sheet(workBook, workSheet, "Resultados")
    //Buffer
    let buf = XLSX.write(workBook, {bookType: "xlsx", type: "buffer"})
    //Binary String
    XLSX.write(workBook,{bookType: "xlsx", type: "binary"})
    //Descargar
    XLSX.writeFile(workBook, "ResultadosEncuesta.xlsx")
  }

  return (
    <Fade>
      <div className={classes.table}>
        <MaterialTable
          title={Title}
          style={styleTable}
          actions={[
              {icon: () => <RiFileExcel2Line className={classes.excelIcon} />,
                tooltip: "Exportar tabla a Excel",
                isFreeAction: true,
                onClick: () => downloadExcel(),
              }
          ]}
          options={{
            selection: selection,
            emptyRowsWhenPaging: true,
            pageSizeOptions: pageSize,
            actionsColumnIndex: -1,
            showTextRowsSelected: false,
            showSelectAllCheckbox: false,
            headerStyle: {
              backgroundColor: "#0185b6",
              color: "#fff",
              fontFamily: "quicksand",
            },
          }}
          localization={{
            deleteAction: "Borrar",
            deleteHeader: "Borrar",
            toolbar: {
              searchPlaceholder: "Buscar",
              nRowsSelected: "{0} fila(s) seleccionadas",
            },
            header: {
              actions: "Acciones",
            },
            body: {
              addTooltip: "Añadir",
              editTooltip: "Editar",
              deleteTooltip: "Eliminar",
              emptyDataSourceMessage: "No hay datos para mostrar",
              editRow: {
                deleteText:
                  "¿Estás seguro de querer eliminar esta información?",
                cancelTooltip: "Cancelar",
                saveTooltip: "Aceptar",
              },
            },
            pagination: {
              labelRowsSelect: "Filas",
              firstTooltip: "Ir al principio",
              nextTooltip: "Siguiente página",
              previousTooltip: "Página anterior",
              lastTooltip: "Ir al final",
              labelDisplayedRows: "{from}-{to} de {count}",
            },
          }}
          icons={{
            Add: () => <AddOutlined className={classes.icono} />,
            Edit: () => <EditOutlined className={classes.icono} />,
            Search: () => <SearchOutlined className={classes.icono} />,
            Delete: () => <DeleteOutlined className={classes.icono} />,
          }}
          {...props}
        />
      </div>
    </Fade>
  );
}
