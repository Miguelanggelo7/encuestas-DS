import React, {useEffect} from "react";
import { Link } from "react-router-dom";
import { 
    makeStyles, 
} from "@material-ui/core";
import GridForms from "../components/CardsForms/GridForms";
import { getPublicSurveys } from "../firebase/functions"; 

// ESTILOS
const useStyles = makeStyles({
  containerSearch: {
    textAlign: 'center',
  },
});

const SearchForms = () => {
  const classes = useStyles();

  useEffect(() => {
    const getData = async () => {
      const data = await getPublicSurveys();
      console.log(data)
    }

    getData()
  }, []);

  return (
    <div className={classes.containerSearch}>
      <GridForms/>
    </div>
  );
};

export default SearchForms;