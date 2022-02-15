import React, { useEffect, useState } from "react";
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
  const [encuestas, setEncuestas] = useState(null);

  useEffect(() => {
    const getData = async () => {
      const data = await getPublicSurveys();
      setEncuestas(data)
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