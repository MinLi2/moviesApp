import React, { useState, useEffect,useContext } from "react";
import {Link,Route,withRouter} from "react-router-dom";
import PageTemplate from '../components/templateMovieListPage'
import { getUpcomingMovie } from "../api/tmdb-api";
import {MoviesContext} from '../contexts/moviesContext'
import AddToFavoritesWLButton from '../components/buttons/addToWatchList'



  const UpcomingMoviePage = () => {
    const [movies, setMovies] = useState([]);
    useEffect(() => {
      getUpcomingMovie().then(movies => {
        setMovies(movies);
      });
    }, []);
    const context = useContext(MoviesContext);
  
    return (
      <PageTemplate
        title="No. Movies"
        movies={movies}  /* Changed */
        action={(movie) => {
          return <AddToFavoritesWLButton movie={movie} />;
        }}
      />
    );
  };


export default withRouter(UpcomingMoviePage);