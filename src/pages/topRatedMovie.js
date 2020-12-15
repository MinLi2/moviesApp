import React, { useState, useEffect,} from "react";

//import PageTemplate from '../components/templateMovieListPage'
import { getTopRatedMovie } from "../api/tmdb-api";
import FilterControls from "../components/filterControls";
import Header from "../components/headerMovieList";
import TopRatedList from "../components/topRatedList";

//import RateMovieButton from '../components/buttons/rateMovie'



   const TopRatedMovie = () => {
     const [movies, setMovies] = useState([]);
     useEffect(() => {
        getTopRatedMovie().then(movies => {
         setMovies(movies);
      });
     }, []);
   
  
     return (
      <>
         <Header numMovies={movies.length} />
         <FilterControls />
         <TopRatedList movies={movies} />
         
      </>
     );
   };



  
 export default TopRatedMovie;



