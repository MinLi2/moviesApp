import React, { useState, useEffect,} from "react";

import PageTemplate from '../components/templateMovieListPage'
import { getNowPlayingMovie } from "../api/tmdb-api";

import RateMovieButton from '../components/buttons/rateMovie'



  const NowPlayingMoviePage = () => {
    const [movies, setMovies] = useState([]);
    useEffect(() => {
      getNowPlayingMovie().then(movies => {
        setMovies(movies);
      });
    }, []);
   
  
    return (
      <PageTemplate
        title="Now Playing Movie"
        movies={movies}  /* Changed */
        action={(movie) => {
          return <RateMovieButton movie={movie} />;
        }}
      />
    );
  };



  
export default NowPlayingMoviePage;
