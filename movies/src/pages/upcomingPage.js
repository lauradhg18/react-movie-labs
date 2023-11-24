import PageTemplate from '../components/templateMovieListPage'
import { getUpcomingMovies } from "../api/tmdb-api";
import { useQuery } from 'react-query';
import Spinner from '../components/spinner';
import AddToFavoritesIcon from '../components/cardIcons/addToFavorites'
import AddToWatchListIcon from '../components/cardIcons/addToWatchListIcon'
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

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
    const watchListStored = movies.filter(m => m.watchList)
    localStorage.setItem('forWatchList', JSON.stringify(watchListStored))
   


    return (
      <PageTemplate
        title='Upcoming Movies'
        movies={movies}
        action={[
          (movie) => <AddToFavoritesIcon movie={movie} />,
          (movie) => <AddToWatchListIcon movie={movie} />,
        ]}
            
      />
    );
  };
  export default UpcomingPage;