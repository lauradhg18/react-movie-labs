import React from "react";
import PageTemplate from '../components/templateMovieListPage'
import { getUpcomingMovies } from "../api/tmdb-api";
import { useQuery } from 'react-query';
import Spinner from '../components/spinner';
import AddToFavoritesIcon from '../components/cardIcons/addToFavorites'


const UpcomingPage = (props) => {
    const {data, error, isLoading, isError }  = useQuery('upcoming', getUpcomingMovies)

    if (isLoading) {
      return <Spinner />
    }
  
    if (isError) {
      return <h1>{error.message}</h1>
    }  
    const movies = data.results;


    const favorites = movies.filter(m => m.favorite)
     localStorage.setItem('favorites', JSON.stringify(favorites))
   

  
  
    return (
      <PageTemplate
        title='Upcoming Movies'
        movies={movies}
        action={(movie) => {
          return <AddToFavoritesIcon movie={movie} />
        }}
      />
    );
  };
  export default UpcomingPage;