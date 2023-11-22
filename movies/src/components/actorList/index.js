import React from "react";
import Actor from "../movieActors";
import Grid from "@mui/material/Grid";
import {DataGrid} from "@mui/x-data-grid";


const MovieActorList = ({credits}) => {
 
  let actorCards = credits.map((c) => (
    <Grid key={c.id} item xs={2} sm={2} md={2} lg={4} xl={1}>
      <Actor key={c.id} credits={c} />
    </Grid>
  ));

  return(
    actorCards
  );
};

export default MovieActorList;