import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CardHeader from "@mui/material/CardHeader";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import PlaylistAddIcon from '@mui/icons-material/PlaylistAdd';
import CalendarIcon from "@mui/icons-material/CalendarTodayTwoTone";
import StarRateIcon from "@mui/icons-material/StarRate";
import Grid from "@mui/material/Grid";
import img from '../../images/film-poster-placeholder.png'
import { Link } from "react-router-dom";
import Avatar from '@mui/material/Avatar';
import React, { useContext  } from "react";
import Box from '@mui/material/Box';
import { MoviesContext } from "../../contexts/moviesContext";

export default function MovieCard({ movie, action }) {
  const { favorites, addToFavorites } = useContext(MoviesContext);
  const { watchList, addToWatchList } = useContext(MoviesContext);
  

  if (favorites.find((id) => id === movie.id)) {
    movie.favorite = true;
  } else {
    movie.favorite = false
  }

  if (watchList.find((id) => id === movie.id)) {
    movie.watchList = true;
  } else {
    movie.watchList = false
  }
 
  const handleAddToFavorite = (e) => {
    e.preventDefault();
    addToFavorites(movie);
  };

  const handleAddToWatchList = (e) => {
    e.preventDefault();
    addToWatchList(movie);
  };


  return (
    <Card sx={{ maxWidth: 345 }}>
       <CardHeader
       title={
        <Box display="flex" alignItems="center">
          {movie.favorite && (
            <Avatar sx={{ backgroundColor: 'red', width: 30, height: 30, marginRight: 1, marginTop: 1 }}>
              <FavoriteIcon />
            </Avatar>
          )}
          {movie.watchList && (
            <Avatar sx={{ backgroundColor: 'yellow', width: 30, height: 30, marginRight: 1 }}>
              <PlaylistAddIcon />
            </Avatar>
          )}
          <Typography variant="h5" component="p">
            {movie.title}
          </Typography>
        </Box>
      }
      />
      <CardMedia
        sx={{ height: 500 }}
        image={
          movie.poster_path
            ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
            : img
        }
      />
      <CardContent>
        <Grid container>
          <Grid item xs={6}>
            <Typography variant="h6" component="p">
              <CalendarIcon fontSize="small" />
              {movie.release_date}
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="h6" component="p">
              <StarRateIcon fontSize="small" />
              {"  "} {movie.vote_average}{" "}
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
      <CardActions disableSpacing>
      {action.map(action =>  { return action(movie)})}
          <Link to={`/movies/${movie.id}`}>
           <Button variant="outlined" size="medium" color="primary">
            More Info ...
          </Button>
  </Link>

      </CardActions>
    </Card>
  );
}


