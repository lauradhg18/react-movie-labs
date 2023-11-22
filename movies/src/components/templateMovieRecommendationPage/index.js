import React from "react";
import Grid from "@mui/material/Grid";
import MovieListRecommendation from "../movieListRecommendations";

function MovieRecommendationPageTemplate({movies, action}) { 
  
  console.log(movies)
   
  if(movies !== undefined){
     
      return (
         <Grid container sx={{ padding: '60px' }}>

            <Grid item container spacing={2}>    
             <MovieListRecommendation action={action} movies={movies} ></MovieListRecommendation>
              </Grid>
           </Grid>
      );
    }
};

export default MovieRecommendationPageTemplate;