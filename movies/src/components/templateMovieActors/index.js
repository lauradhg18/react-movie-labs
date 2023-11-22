import React from "react";
import Grid from "@mui/material/Grid";
import MovieActorList from "../actorList";

function MovieActorsTemplate({credits}) { 
  if(credits !== undefined){
     
      return (
         <Grid container sx={{ padding: '60px' }}>

            <Grid item container spacing={2}>    
             <MovieActorList credits={credits} ></MovieActorList>
              </Grid>
           </Grid>
      );
   }
};

export default MovieActorsTemplate;