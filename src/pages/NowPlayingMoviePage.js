import React, { useState, useEffect,} from "react";

//import PageTemplate from '../components/templateMovieListPage'
import { getNowPlayingMovie } from "../api/tmdb-api";
import FilterControls from "../components/filterControls";
import Header from "../components/headerMovieList";
import RateMovieList from "../components/rateMovieList";

//import RateMovieButton from '../components/buttons/rateMovie'



  const NowPlayingMoviePage = () => {
    const [movies, setMovies] = useState([]);
    useEffect(() => {
      getNowPlayingMovie().then(movies => {
        setMovies(movies);
      });
    }, []);
   
  
    return (
      <>
        <Header numMovies={movies.length} />
        <FilterControls />
        <RateMovieList movies={movies} />
      </>
    );
  };



  
export default NowPlayingMoviePage;




