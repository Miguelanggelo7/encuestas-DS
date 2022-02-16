import React, {useState} from "react";
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import FavoriteIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteFill from '@mui/icons-material/Favorite';
import { ButtonBase } from "@mui/material";
import { 
  makeStyles, 
} from "@material-ui/core";
import { motion } from "framer-motion";
import LinkOutlinedIcon from '@mui/icons-material/LinkOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import { deleteSurvey, getCurrentUid } from "../../firebase/functions";
import { useHistory } from "react-router-dom";

// ESTILOS
const useStyles = makeStyles({
  cardForm: {
    listStyle: 'none',
    fontSize: '1.5rem',
    textAlign: 'center',
    width: '250px',
    borderRadius: '5pt',
    backgroundColor: '#fff',
    margin: 'auto',
    filter: 'drop-shadow(1px 1px 1px rgba(50, 50, 0, 0.5))',
    "&:hover": {
      filter: 'drop-shadow(2px 2px 2px rgba(50, 50, 0, 0.5))',
    },
  },
  movieImage: {
    backgroundColor: '#bbb',
    width: '250px',
    height: '200px',
  },
  titlesito: {
      textOverflow: 'ellipsis',
      height: '30pt',
      marginBottom: '20pt',
  }
});

export function CardMyForm({ data }) {

  const classes = useStyles();
  const [like, setLike] = useState(false);
  const history = useHistory();

  const likeClick = e => {
    e.stopPropagation();
    setLike(!like);
  }

  const deleteForm = async () => {
    try {
      const state = (data.state === "private") ? "privadas" : "publicas";
      await deleteSurvey(data.id, state);
      history.push("/mis-encuestas");
    } catch (err) {
      console.log(err)
    }
  }

  const copyLink = () => {
    const link = `localhost:3000/buscar/${data.id}?user=${getCurrentUid()}${(data.state === "private") ? `&state=private` : ''}`
    navigator.clipboard.writeText(link);
    alert('El link de invitación de la encuesta se ha copiado al portapapeles')
  }

  return (
    <motion.li whileHover={{ scale: 1.03 }} transition={{ duration: 0.2 }} className={classes.cardForm}>
      <Card sx={{ maxWidth: 345 }}> 
            <ButtonBase style={{display: 'block', width: '100%'}} >
              {/* <CardHeader
                avatar={
                  <Avatar sx={{ bgcolor: "#0185B6"}} aria-label="prueba">
                    a
                  </Avatar>
                }
                title="XD"
                subheader="doble xD"
              /> */}
              { data.image ?  
                <CardMedia
                    className={classes.movieImage}
                    component="img"
                    height="200"
                    image={data.image}
                    alt={data.image}
                  /> :
                  <CardMedia
                    className={classes.movieImage}
                    component="img"
                    height="200"
                    image="https://wpdirecto.com/wp-content/uploads/2017/08/alt-de-una-imagen.png"
                  />
              }
              <CardContent>
                <Typography className={classes.titlesito} variant="body2">
                  {data.title}
                </Typography>
              </CardContent>
              <CardActions disableSpacing style={{width: '100%'}}>
                <IconButton id="likesito" aria-label="add to favorites" onMouseDown={e => e.stopPropagation()} onClick={likeClick}>
                  {!like ? <FavoriteIcon /> : <FavoriteFill style={{color: '#FF005C'}}/>}
                </IconButton>
                <IconButton id="edit" aria-label="edit" onMouseDown={e => e.stopPropagation()} >
                  <EditOutlinedIcon/>
                </IconButton>
                <IconButton id="copylink" aria-label="copylink" onMouseDown={e => e.stopPropagation()} onClick={copyLink}>
                  <LinkOutlinedIcon/>
                </IconButton>
                {/* <IconButton id="delete" aria-label="delete" onMouseDown={e => e.stopPropagation()} onClick={deleteForm}>
                  <DeleteOutlineOutlinedIcon/>
                </IconButton> */}
              </CardActions>
            </ButtonBase>
      </Card>
    </motion.li>
  );
}
