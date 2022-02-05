import React from "react";
import { 
    makeStyles,
    Paper,
    IconButton,
    InputBase,
    Divider
} from "@material-ui/core";
import {
  Search
} from "@mui/icons-material";

// ESTILOS
const useStyles = makeStyles({
  
});

const MyForms = () => {
  const classes = useStyles();

  return (
    <div style={{textAlign: 'center'}}>
      <div style={{width: '220pt', margin: 'auto', marginTop: '60pt'}} >
        <Paper
          sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400 }}
          elevation={3}
        >
          <InputBase
            placeholder="Buscar mis encuestas"
            inputProps={{ 'aria-label': 'Buscar mis encuestas' }}
          />
          <IconButton aria-label="search">
            <Search />
          </IconButton>
        </Paper>
      </div>
      <p>prueba</p>
    </div>
  );
};

export default MyForms;