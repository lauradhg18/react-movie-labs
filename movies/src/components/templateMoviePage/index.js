import React from "react";
import MovieHeader from "../headerMovie";
import Grid from "@mui/material/Grid";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import { getMovieImages } from "../../api/tmdb-api";
import { getMovieProviders } from "../../api/tmdb-api";
import { useQuery } from "react-query";
import Spinner from '../spinner'
import Typography from "@mui/material/Typography";

const TemplateMoviePage = ({ movie, children }) => {
  const { data: img , error: imgerr, isLoading: imgLoad, isError: imgErr } = useQuery(
    ["images", { id: movie.id }],
    getMovieImages
  );
  const { data: provider , error: proverr, isLoading: provLoad, isError: provErr } = useQuery(
    ["providers", { id: movie.id }],
    getMovieProviders
  );


  if (imgLoad || provLoad) {
    return <Spinner />;
  }

  if (imgErr) {
    return <h1>{imgerr.message}</h1>;
  }
  if (provErr) {
    return <h1>{proverr.message}</h1>;
  }
  const images = (img.posters).slice(0, 2);
  console.log(provider.results)
  const providers = Object.values(provider.results)
  console.log(providers)

  console.log(providers[0].link)
  //console.log(providers[0].flatrate[0].provider_name)
  /*<Typography variant="h9" >
  <div>{providers[0].flatrate[0].provider_name}
  <img
      src={`https://image.tmdb.org/t/p/w500/${providers[0].flatrate[0].logo_path}`}
      alt={providers[0].flatrate[0].provider_id}
      style={{ width: '50px' }}
  /></div>
  <div>{providers[1].flatrate[0].provider_name}</div> 
      
      
  </Typography> 
  */

  return (
    <>
      <MovieHeader movie={movie} />
      <Grid container spacing={5} sx={{ padding: "15px" }}>
        <Grid item xs={3}>
          <div sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-around",
          }}>
            <ImageList 
                cols={1}>
                {images.map((image) => (
                    <ImageListItem key={image.file_path} cols={1}>
                    <img
                        src={`https://image.tmdb.org/t/p/w500/${image.file_path}`}
                        alt={image.poster_path}
                    />
                    </ImageListItem>
                ))
                }
            </ImageList>
          </div>
          
        <div>
          <Typography variant="h5" >
             WHERE TO WATCH
          </Typography>
                    
                  
                 
               
        

        </div>
          


        </Grid>

        <Grid item xs={9}>
          {children}
        </Grid>
      </Grid>
    </>
  );
};

export default TemplateMoviePage;