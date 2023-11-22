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
import { getActorMovieCredits} from "../../api/tmdb-api";
import { useQuery } from 'react-query';
import Spinner from '../spinner';
import PageTemplateRec from '../templateMovieRecommendationPage';
import AddToFavoritesIcon from '../cardIcons/addToFavorites'
import CakeIcon from '@mui/icons-material/Cake';
import MaleIcon from '@mui/icons-material/Male';
import FemaleIcon from '@mui/icons-material/Female';


const root = {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    listStyle: "none",
    padding: 1.5,
    margin: 0,
};
const chip = { margin: 0.5 };

const ActorDetails = ({actor}) => {  
  const [drawerOpen, setDrawerOpen] = useState(false);
  
  const {data: moviecredits, error: movError, isLoading: movLoading, isError:movIsErr }  = useQuery(
    'moviecredits', ()=> getActorMovieCredits(actor.id))
  
  if (movLoading) {
    return <Spinner />;
  }
  
  if (movIsErr) {
    return <h1>{movError.message}</h1>
  }  
   
  const movieCredits = moviecredits.cast
  const favorites = movieCredits.filter(m => m.favorite)
  localStorage.setItem('favorites', JSON.stringify(favorites))
 
  let deathDate
  if (movieCredits.deathday != null){
      deathDate =  movieCredits.deathday
  }else {
      deathDate = "-"
  }
  let gender;
  if (movieCredits.gender === 1){
      gender = "Female";
  }else if (movieCredits.gender === 2){
    gender = "Male";
  }else if (movieCredits.gender === 3){
    gender = "Non binary";
  } else {
    gender = "Not specified";
  }
 
  return (
    <>

      <Typography variant="h5" component="h3">
        BIOGRAPHY
      </Typography>
      <Typography variant="h6" component="p">
        {actor.biography}
      </Typography>


      <Paper component="ul" sx={{...root}}>
        <Chip icon={<CakeIcon/>} label={`Birth Date: ${actor.birthday}`} />
        <Chip
          label={`Death Date: ${deathDate}`}
        />
        <Chip
          icon={<StarRate />}
          label={`Popularity: ${actor.popularity}`}
        />
         <Chip
          icon={<StarRate />}
          label={`Gender: ${gender}`}
        />
      </Paper>
      
      
      <Typography variant="h5" component="h3" textAlign="center" >
        MOVIES CREDITS
      </Typography>

      <PageTemplateRec
       movies={movieCredits}
       action={(movie) => {
       return <AddToFavoritesIcon movie={movie} />
        }}
      />
      
      </>
  );
};
export default ActorDetails ;