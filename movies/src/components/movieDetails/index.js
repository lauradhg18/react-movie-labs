import Chip from "@mui/material/Chip";
import Paper from "@mui/material/Paper";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import MonetizationIcon from "@mui/icons-material/MonetizationOn";
import StarRate from "@mui/icons-material/StarRate";
import NavigationIcon from "@mui/icons-material/Navigation";
import Fab from "@mui/material/Fab";
import Typography from "@mui/material/Typography";
import React, { useState } from "react";
import Drawer from "@mui/material/Drawer";
import MovieReviews from "../movieReviews";
import MovieRate from "../movieRate";
import { getMovieRecommendations } from "../../api/tmdb-api";
import { getMovieCredits } from "../../api/tmdb-api";
import { useQuery } from 'react-query';
import Spinner from '../spinner';
import AddToFavoritesIcon from '../cardIcons/addToFavorites'
import MovieActorsTemplate from '../templateMovieActors';
import Grid from "@mui/material/Grid";
import MovieListRecommendation from "../movieListRecommendations";

const root = {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    listStyle: "none",
    padding: 1.5,
    margin: 0,
};
const chip = { margin: 0.5 };

const MovieDetails = ({movie}) => {  
  const [rateDrawerOpen, setRateDrawerOpen] = useState(false);
  const [reviewsDrawerOpen, setReviewsDrawerOpen] = useState(false);
  //
  const {data: recommendations, error: recError, isLoading: recLoading, isError:recIsErr }  
  = useQuery('recommendations'+ movie.id, async ()=> {const responseRec = await getMovieRecommendations(movie.id); return responseRec})
  const {data: credits, error: credError, isLoading: credLoading, isError: credIsErr } 
  = useQuery('credits' + movie.id,  async ()=> {const responseCre = await getMovieCredits(movie.id); return responseCre;})
  if (recLoading || credLoading) {
    return <Spinner />;
  }
  
  if (recIsErr) {
    return <h1>{recError.message}</h1>
  }  
   
  const moviesRec = recommendations 
  const favorites = moviesRec.filter(m => m.favorite)
  localStorage.setItem('favorites', JSON.stringify(favorites))
 
  if (credError) {
    return <h1>{credIsErr.message}</h1>
  } 

  const movieCredits = credits.cast

  return (
    <>

      <Typography variant="h5" component="h3">
        Overview
      </Typography>

      <Typography variant="h6" component="p">
        {movie.overview}
      </Typography>

      <Paper 
        component="ul" 
        sx={{...root}}
      >
        <li>
          <Chip label="Genres" sx={{...chip}} color="primary" />
        </li>
        {movie.genres.map((g) => (
          <li key={g.name}>
            <Chip label={g.name} sx={{...chip}} />
          </li>
        ))}
      </Paper>

      <Paper component="ul" sx={{...root}}>
        <Chip icon={<AccessTimeIcon />} label={`${movie.runtime} min.`} />
        <Chip
          icon={<MonetizationIcon />}
          label={`${movie.revenue.toLocaleString()}`}
        />
        <Chip
          icon={<StarRate />}
          label={`${movie.vote_average} (${movie.vote_count}`}
        />
        <Chip label={`Released: ${movie.release_date}`} />
      </Paper>

      <Paper component="ul" sx={{...root}}>
        <li>
        <Chip
          label={`Production countries`} sx={{...chip}} color="primary"
        />
        </li>
        {movie.production_countries.map((pc) => (
          <li key={pc.name}>
            <Chip label={pc.name} sx={{...chip}} />
          </li>
        ))}
      </Paper>
      
      <Typography variant="h5" component="h3" textAlign="center" >
        RECOMMENATIONS
      </Typography>

      <Grid container sx={{ padding: '60px' }}>
          <Grid  item container spacing={2}>    
  <           MovieListRecommendation action={(movie) => {
                        return <AddToFavoritesIcon movie={movie} />
                        }} movies={moviesRec} ></MovieListRecommendation>
           </Grid>
      </Grid>
      

      <Typography variant="h5" component="h3" textAlign="center" >
        ACTORS
      </Typography>
      <MovieActorsTemplate
       credits={movieCredits}
      />

      <Fab
        color="primary"
        variant="extended"
        onClick={() =>setRateDrawerOpen(true)}
        sx={{
            position: "fixed",
            bottom: '5em',
            right: '1em'
        }}
      >
        <NavigationIcon />
        Rate Movie
      </Fab>
      <Drawer anchor="top" open={rateDrawerOpen} onClose={() => setRateDrawerOpen(false)}>
        <MovieRate movie={movie} />
      </Drawer>


      <Fab
        color="secondary"
        variant="extended"
        onClick={() =>setReviewsDrawerOpen(true)}
        sx={{
            position: "fixed",
            bottom: '1em',
            right: '1em'
        }}
      >
        <NavigationIcon />
        Reviews
      </Fab>

      <Drawer anchor="top" open={reviewsDrawerOpen} onClose={() => setReviewsDrawerOpen(false)}>
        <MovieReviews movie={movie} />
      </Drawer>

              </>
      
  );
};
export default MovieDetails ;
/*<PageTemplateRec
       movies={moviesRec}
       action={(movie) => {
       return <AddToFavoritesIcon movie={movie} />
        }}
      />*/ 
