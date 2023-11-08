import React from "react";
import PageTemplate from '../components/templateMovieListPage'
import { getLatestMovies } from "../api/tmdb-api";
import { useQuery } from 'react-query';
import Spinner from '../components/spinner';
import AddToWatchListIcon from '../components/cardIcons/addToWatchListIcon'

const LatestMoviesPage = (props) => {
    const {data, error, isLoading, isError }  = useQuery('latest', getLatestMovies)

    if (isLoading) {
      return <Spinner />
    }
  
    if (isError) {
      return <h1>{error.message}</h1>
    }  
    const movies = data.results;
    /*const watchListStored = movies.filter(m => m.watchList)
    localStorage.setItem('forWatchList', JSON.stringify(watchListStored))
   */


    return (
      <PageTemplate
        title='Latest Movies'
        movies={movies}
        action={(movie) => {
          return <AddToWatchListIcon movie={movie} />
        }}
      />
    );
  };
  export default LatestMoviesPage;