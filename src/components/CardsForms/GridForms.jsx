import * as React from 'react';
import movies from "./movies.json";
import {CardForm} from "./CardForm.jsx";
import { 
  makeStyles, 
} from "@material-ui/core";

// ESTILOS
const useStyles = makeStyles({
  movieGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, 230px)',
    gap: '40px',
    padding: '40px',
    justifyContent: 'center',
    "@media (max-width: 560px)": {
      gridTemplateColumns: '100%',
    }
  },
});

function GridForms(){

  const classes = useStyles();
  return(
    <ul className = {classes.movieGrid}>
      {movies.map((movie) => (
        <CardForm key = {movie.id} movie = {movie}/>
      ))}
    </ul>
  );
}

export default GridForms;
