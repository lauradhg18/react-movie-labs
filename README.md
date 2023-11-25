# react-movie-labs

# Assignment 1 - ReactJS app.

Name: Laura De Haro García

## Overview.

A web application developed by React and Node.js


### Features.
[ A bullet-point list of the __new features__ you added to the Movies Fan app (and any modifications to existing features) .]
 
+ A list of recommended movies, cast and crew associated with a specified movie is displayed on each movie's detail page

+ A list of the films in which a person has participated is shown on each person's details page.

+ A list of the platforms on which it is available for viewing in Ireland is shown on each movie's detail page.

+ There is pagination in all the Main pages, movie recommendations (inside movie's details page) and movie credits of a person (inside person's details page)

+ Rating each movie and storing the rated (use of Rating component from MUI)

+ Two possible interactions with each movie, Favourite and Watchlist button

+ Able to filter by names in the actors main page

+ Able to filter by name the cast who played in a specified movie

+ Able to filter by name or department the crew who took part on the movie

+ Able to delete a movie from the watchList

## API endpoints.

[ List the __additional__ TMDB endpoints used, giving the description and pathname for each one.] 

+ Displays a list of movies with the highest popularity and takes as a parameter a page number so that the list can be updated according to the pagination -movies/popular 

+ Displays a list of top rated movies and takes as a parameter a page number so that the list can be updated according to the pagination - movies/topRated 

+ Displays a list of the latest movies in the cinemas and takes as a parameter a page number so that the list can be updated according to the pagination - movies/latest

+ Displays a list of popular Actors and takes as a parameter a page number so that the list can be updated according to the pagination - movies/people

+ Displays a list of the movies marked and added to the watchList - movies/watchList

+ Displays page of details of a person and takes as a parameter the id of the person - movies/people/:id


## Routing.

[ List the __new routes__ supported by your app and state the associated page.]

+ /movies/watchList - WatchListMoviesPage 
+ /movies/topRated - TopRatedMoviesPage
+ /movies/latest - LatestMoviesPage
+ /movies/popular - PopularMoviesPage 
+ /movies/people/:id - PeopleDetailsPage 
+ /movies/people - PeoplePage
