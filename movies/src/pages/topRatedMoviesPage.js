import {useState, useEffect} from "react";
import PageTemplate from '../components/templateMovieListPage'
import { getTopRated } from "../api/tmdb-api";
import { useQuery } from 'react-query';
import Spinner from '../components/spinner';
import AddToFavoritesIcon from '../components/cardIcons/addToFavorites'
import AddToWatchListIcon from '../components/cardIcons/addToWatchListIcon'
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
const TopRatedMoviesPage = (props) => {
  const [currentPage, setCurrentPage] = useState(1);
    const { data, error, isLoading, isError } = useQuery(
      ['topRated'+currentPage, currentPage], // Key for the query
      () => getTopRated(currentPage), // queryFn
      {
        keepPreviousData: true, 
      }
    );
    const handlePageChange = (event, newPage) => {
      setCurrentPage(newPage);
    };

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
      <div>
      <PageTemplate
        title='Top Rated Movies'
        movies={movies}
        action={[
          (movie) => <AddToFavoritesIcon movie={movie} />,
          (movie) => <AddToWatchListIcon movie={movie} />,
        ]}
      />
      <Stack spacing={2}>
      <Pagination count={10} color="secondary" page={currentPage} onChange={handlePageChange}/>
       </Stack>

       </div>
    );
  };
  export default TopRatedMoviesPage;