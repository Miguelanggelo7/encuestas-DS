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
import FavoriteIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteFill from '@mui/icons-material/Favorite';
import { ButtonBase } from "@mui/material";
import { 
  makeStyles, 
} from "@material-ui/core";
import { motion } from "framer-motion";
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
});

export function CardForm({ data }) {

  const classes = useStyles();
  const history = useHistory();
  const [like, setLike] = useState(false);

  const likeClick = e => {
    e.stopPropagation();
    setLike(!like);
  }

  const moveLink = () => {
    history.push(`buscar/${data.id}?user=${data.userId}`);
  }

  return (
    <motion.li whileHover={{ scale: 1.03 }} transition={{ duration: 0.2 }} className={classes.cardForm}>
      <Card sx={{ maxWidth: 345 }}> 
          <ButtonBase style={{display: 'block', width: '100%'}} onClick={moveLink}>
            <CardHeader
              avatar={
                <Avatar sx={{ bgcolor: "#0185B6"}} aria-label={data.title}>
                  {data.name.charAt(0).toUpperCase()}
                </Avatar>
              }
              title={data.name}
            />
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
              <Typography  variant="body2" style={{height: '30pt'}}>
                {data.title}
              </Typography>
            </CardContent>
            <CardActions disableSpacing>
              <IconButton id="likesito" aria-label="add to favorites" onMouseDown={e => e.stopPropagation()} onClick={likeClick}>
                {!like ? <FavoriteIcon /> : <FavoriteFill style={{color: '#FF005C'}}/>}
              </IconButton>
            </CardActions>
          </ButtonBase>
      </Card>
    </motion.li>
  );
}
