import React, { useContext } from "react";
import PageTemplate from "../components/templateMovieListPage";
import { MoviesContext } from "../contexts/moviesContext";
import { useQueries } from "react-query";
import { getMovie } from "../api/tmdb-api";
import Spinner from '../components/spinner'
import RemoveFromWatchList from "../components/cardIcons/removeFromWatchList";


const WatchListMoviesPage = () => {
  const {watchlist: movieIds } = useContext(MoviesContext);

  // Create an array of queries and run in parallel.
  console.log(movieIds)
  const watchListMovieQueries = useQueries(
    movieIds.map((movieId) => {
      return {
        queryKey: ["movie", { id: movieId }],
        queryFn: getMovie,
      };
    })
  );
  // Check if any of the parallel queries is still loading.
  const isLoading = watchListMovieQueries.find((m) => m.isLoading === true);

  if (isLoading) {
    return <Spinner />;
  }

  const movies = watchListMovieQueries.map((q) => {
    q.data.genre_ids = q.data.genres.map(g => g.id)
    return q.data
  });

  const toDo = () => true;

  return (
    <PageTemplate
    title="WatchList"
    movies={movies}
    action={(movie) => {
      return (
        <>
          <RemoveFromWatchList movie={movie} />
          
        </>
      );
    }}
  />
  );
};

export default WatchListMoviesPage;