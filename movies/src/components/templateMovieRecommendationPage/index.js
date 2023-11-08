import React, { useState } from "react";
import Header from "../headerMovieList";
import FilterCard from "../filterMoviesCard";
import MovieList from "../movieList";
import Grid from "@mui/material/Grid";

function MovieRecommendationPageTemplate({movies, action}) { // Nañadir action quizas
  
  let displayedMovies = movies

  return (
    <Grid container sx={{ padding: '20px' }}>

      <Grid item container spacing={5}>
        <Grid key="find" item xs={12} sm={6} md={4} lg={3} xl={2}>
          
            </Grid>
            <MovieList movies={displayedMovies} action={action}></MovieList>
          </Grid>
        </Grid>
      );
    }
    export default MovieRecommendationPageTemplate;