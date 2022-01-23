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

// ESTILOS
const useStyles = makeStyles({
  cardForm: {
    listStyle: 'none',
    fontSize: '1.5rem',
    textAlign: 'center',
    width: '250px',
    borderRadius: '5pt',
    backgroundColor: '#fff',
    filter: 'drop-shadow(1px 1px 1px rgba(50, 50, 0, 0.5))',
    "&:hover": {
      filter: 'drop-shadow(2px 2px 2px rgba(50, 50, 0, 0.5))',
    },
  },
  movieImage: {
    backgroundColor: 'azure',
  },
});

export function CardForm({ movie }) {

  const classes = useStyles();
  const [like, setLike] = useState(false);
  const imageUrl = "https://image.tmdb.org/t/p/w300" + movie.poster_path;

  const likeClick = () => {
    setLike(!like);
  }

  return (
    <motion.li whileHover={{ scale: 1.05 }} transition={{ duration: 0.2 }} className={classes.cardForm}>
      <Card sx={{ maxWidth: 345 }}> 
          <ButtonBase style={{display: 'block'}}>
            <CardHeader
              avatar={
                <Avatar sx={{ bgcolor: "#0185B6"}} aria-label={movie.title}>
                  {movie.persona.charAt(0).toUpperCase()}
                </Avatar>
              }
              title={movie.persona}
              subheader={movie.release_date}
            />
            <CardMedia
              className={classes.movieImage}
              component="img"
              height="200"
              image={movie.backdrop_path}
              alt={movie.title , movie.release_date}
            />
            <CardContent>
              <Typography  variant="body2" style={{height: '20pt'}}>
                {movie.title}
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