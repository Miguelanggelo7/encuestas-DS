import React, {useState} from "react";
import styles from "./MovieCard.module.css";
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

export function MovieCard({ movie }) {

  const [like, setLike] = useState(false);
  const imageUrl = "https://image.tmdb.org/t/p/w300" + movie.poster_path;

  const likeClick = () => {
    setLike(!like);
  }

  return (
    <li className={styles.movieCard}>
      <Card sx={{ maxWidth: 345 }}> 
          <CardHeader
            avatar={
              <Avatar sx={{ bgcolor: "#0185B6"}} aria-label={movie.title}>
                R
              </Avatar>
            }
            title={movie.id}
            subheader={movie.release_date}
          />
          <CardMedia
            className={styles.movieImage}
            component="img"
            height="200"
            image={imageUrl}
            alt={movie.title , movie.release_date}
          />
          <CardContent>
            <Typography  variant="body2" style={{height: '20pt'}}>
              {movie.title}
            </Typography>
          </CardContent>
          <CardActions disableSpacing>
            <IconButton id="likesito" aria-label="add to favorites" onClick={likeClick}>
              {!like ? <FavoriteIcon /> : <FavoriteFill style={{color: '#FF005C'}}/>}
            </IconButton>
          </CardActions>
      </Card>
    </li>
  );
}
