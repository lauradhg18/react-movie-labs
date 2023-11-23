import React from "react";
import { getPeople } from "../api/tmdb-api";
import PeoplePageTemplate from '../components/templatePeopleListPage';
import { useQuery } from 'react-query';
import Spinner from '../components/spinner';
// import AddToFavoritesIcon from '../components/cardIcons/addToFavorites'

const PeoplePage = (props) => {

  const {data, error, isLoading, isError }  = useQuery('discover', getPeople)

  if (isLoading) {
    return <Spinner />
  }

  if (isError) {
    return <h1>{error.message}</h1>
  }  
  const people = data.results
  console.log(people);

  // Redundant, but necessary to avoid app crashing.
 // const favorites = movies.filter(m => m.favorite)
 // localStorage.setItem('favorites', JSON.stringify(favorites))
 

  return (
    <PeoplePageTemplate
    title="Discover Actors, Directors..."
    people={people}
    //action={(movie) => {
      //return <AddToFavoritesIcon movie={movie} />
    //}}
  />
  );
};
export default PeoplePage;