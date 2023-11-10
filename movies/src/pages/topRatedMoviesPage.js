import React from "react";
import PageTemplate from '../components/templateMovieListPage'
import { getTopRated } from "../api/tmdb-api";
import { useQuery } from 'react-query';
import Spinner from '../components/spinner';
import AddToWatchListIcon from '../components/cardIcons/addToWatchListIcon'

const TopRatedMoviesPage = (props) => {
    const {data, error, isLoading, isError }  = useQuery('topRated', getTopRated)

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
        title='Top Rated Movies'
        movies={movies}
        action={(movie) => {
          return <AddToWatchListIcon movie={movie} />
        }}
      />
    );
  };
  export default TopRatedMoviesPage;