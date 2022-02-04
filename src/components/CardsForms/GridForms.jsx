// import react, { useEffect, useState } from 'react';
// import movies from "./movies.json";
// import {CardForm} from "./CardForm.jsx";
// import { 
//   makeStyles, 
// } from "@material-ui/core";

// // ESTILOS
// const useStyles = makeStyles({
//   movieGrid: {
//     display: 'grid',
//     gridTemplateColumns: 'repeat(auto-fill, 230px)',
//     gap: '40px',
//     padding: '40px',
//     justifyContent: 'center',
//     "@media (max-width: 560px)": {
//       gridTemplateColumns: '100%',
//     }
//   },
// });

// function GridForms(){
//   const [surveys, setSurveys] = useState(null);

//   useEffect(() => {
//     const getData = async () => {
//       const data =  await getPublicSurveys();
//       setSurveys(data);
//     }

//     getData();
//   }, [])

//   const classes = useStyles();
//   return(
//     <ul className = {classes.movieGrid}>
//       {
//         surveys 
//         ? 
//         (surveys.map(item => (<CardForm key={item.id} movie={movie}/>)))
//         :
//         <p>no tiene encuestas</p>
//       }
//     </ul>
//   );
// }

// export default GridForms;
