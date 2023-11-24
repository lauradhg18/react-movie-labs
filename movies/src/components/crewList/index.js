import React from "react";
import Crew from "../movieCrew";
import Grid from "@mui/material/Grid";

const MovieCrewList = ({credits}) => {
 
  let crewCards = credits.map((c) => (
    <Grid key={c.id} item xs={2} sm={2} md={2} lg={4} xl={1}>
      <Crew key={c.id} credits={c} />
    </Grid>
  ));

  return(
    crewCards.slice(0,6)
  );
};

export default MovieCrewList;