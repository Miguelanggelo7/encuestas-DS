import React from "react";
import { Link } from "react-router-dom";
import { 
    makeStyles, 
    Paper,
    IconButton,
    InputBase,
    Divider,
} from "@material-ui/core";
import {
  Menu,
  Search,
  Directions
} from "@mui/icons-material"
import MovieGrid from "../components/Pantalla/Pantalla-youtube/MovieGrid"

// ESTILOS
const useStyles = makeStyles({
  containerSearch: {
    textAlign: 'center',
  },
  paperStyle: {
    filter: 'drop-shadow(2px 2px 2px rgba(50, 50, 0, 0.5))'
  }
});

const SearchForms = () => {
  const classes = useStyles();

  return (
    <div className={classes.containerSearch}>
      <div style={{width: '220pt', margin: 'auto', marginTop: '20pt'}} >
        <Paper
          sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400 }}
          elevation={3}
        >
          <InputBase
            placeholder="Buscar encuestas"
            inputProps={{ 'aria-label': 'Buscar encuestas' }}
          />
          <IconButton aria-label="search">
            <Search />
          </IconButton>
        </Paper>
      </div>
      <MovieGrid/>
    </div>
  );
};

export default SearchForms;