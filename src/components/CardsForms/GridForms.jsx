import react, { useEffect, useState } from 'react';
import movies from "./movies.json";
import {CardForm} from "./CardForm.jsx";
import { 
  makeStyles, 
  Paper,
  IconButton,
  InputBase,
} from "@material-ui/core";
import {
  Search,
} from "@mui/icons-material";

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
    },
  },
  paperStyle: {
    filter: 'drop-shadow(2px 2px 2px rgba(50, 50, 0, 0.5))'
  },
});

function GridForms(props){

  const [searchTerm, setSearchTerm] = useState('');

  const jsonData = Object.values(props.surveys);

  const classes = useStyles();
  return(
    <div>
      <div style={{width: '220pt', margin: 'auto', marginTop: '60pt'}} >
        <Paper
          sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400 }}
          elevation={3}
        >
          <InputBase
            placeholder="Buscar encuestas"
            inputProps={{ 'aria-label': 'Buscar encuestas' }}
            onChange={(e) => {setSearchTerm(e.target.value)}}
          />
          <IconButton aria-label="search">
            <Search />
          </IconButton>
        </Paper>
      </div>
      <ul className = {classes.movieGrid}>
        {jsonData.filter((data)=>{
          if(searchTerm == ""){
            return data
          }else if (data.title.toLowerCase().includes(searchTerm.toLowerCase())){
            return data
          }
        }).map((data) => (
            <CardForm data = {data}/>
        ))} 
      </ul>
    </div>
  );
}

export default GridForms;
