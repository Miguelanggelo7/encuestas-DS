import * as React from 'react';
import movies from "./movies.json";
import {MovieCard} from "./MovieCard.js";
import styles from "./MovieGrid.module.css";

function MovieGrid(){
  return(
    <ul className = {styles.movieGrid}>
      {movies.map((movie) => (
        <MovieCard key = {movie.id} movie = {movie}/>
      ))}
    </ul>
  );
}

export default MovieGrid;
