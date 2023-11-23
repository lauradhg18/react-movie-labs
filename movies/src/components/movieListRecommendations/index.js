import React from "react";
import Movie from "../movieCardRecommendations";
import Grid from "@mui/material/Grid";
import {DataGrid} from "@mui/x-data-grid";


const MovieListRecommendation = ( {movies, action }) => {
 
  let movieCards = movies.map((m) => (
    <Grid key={m.id} item xs={2} sm={2} md={2} lg={4} xl={1}>
      <Movie key={m.id} movie={m} action={action} />
    </Grid>
  ));
console.log(movieCards)
  return(
    movieCards.slice(0,9)
  );
};

export default MovieListRecommendation;