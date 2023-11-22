import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import img from '../../images/film-poster-placeholder.png'
import React from "react";

export default function MovieActors({credits}) {
  return (
    <Card sx={{ maxWidth: 400 }}>
      <CardMedia
        sx={{height: 400}}
        image={
            credits.profile_path
            ? `https://image.tmdb.org/t/p/w500${credits.profile_path}`
            : img
        }
      />
      <CardContent>
        <Grid container>
          <Grid item xs={6}>
            <Typography variant="h6" component="p">
              {credits.name}
            </Typography>
            <br/>
            <Typography variant="h7" component="p">
              {credits.character}
            </Typography>
          </Grid>
          
        </Grid>
      </CardContent>
    </Card>
  );
}