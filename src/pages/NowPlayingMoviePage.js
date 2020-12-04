import React, { useState, useEffect,} from "react";

import PageTemplate from '../components/templateMovieListPage'
import { getNowPlayingMovie } from "../api/tmdb-api";

import ScoreMovieButton from '../components/buttons/scoreMovie'



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
          return <ScoreMovieButton movie={movie} />;
        }}
      />
    );
  };



  
export default NowPlayingMoviePage;
