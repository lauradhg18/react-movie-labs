import React from "react";
import MovieList from "../movieList";
import Grid from "@mui/material/Grid";

function MovieRecommendationPageTemplate({movies, action}) { 
  
  console.log(movies)
  console.log(action) 
  if(movies !== undefined){
     
      return (
         <Grid container sx={{ padding: '10px' }}>

            <Grid item container spacing={2}>    
             <MovieList action={action} movies={movies} ></MovieList>
              </Grid>
           </Grid>
      );
    }
};

export default MovieRecommendationPageTemplate;