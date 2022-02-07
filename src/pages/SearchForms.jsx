import React from "react";
import { Link } from "react-router-dom";
import { 
    makeStyles, 
} from "@material-ui/core";
import GridForms from "../components/CardsForms/GridForms";

// ESTILOS
const useStyles = makeStyles({
  containerSearch: {
    textAlign: 'center',
  },
});

const SearchForms = () => {
  const classes = useStyles();

  return (
    <div className={classes.containerSearch}>
      <GridForms/>
    </div>
  );
};

export default SearchForms;