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
  const [surveys, setSurveys] = useState(null);

  useEffect(() => {
    const getData = async () => {
      const data = await getPublicSurveys();
      setSurveys(data);
    }

    getData()
  }, []);

  return (
    <div className={classes.containerSearch}>
        {
          surveys ? 
          <GridForms surveys={surveys}/>
          : 
          <p>No hay nada flaco</p>
        }
    </div>
  );
};

export default SearchForms;