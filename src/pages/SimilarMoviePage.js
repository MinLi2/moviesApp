import React, { useContext } from "react";
import PageTemplate from '../components/templateMovieListPage'
import {MoviesContext} from '../contexts/moviesContext'
import AddToWatchListButton from '../components/buttons/addToWatchList'

const SimilarMoviePage = () => {
 
  const context = useContext(MoviesContext);
  const movies = context.similar.filter((m) => {  // New
    return !("watchlist" in m);
 });

  return (
    <PageTemplate
      title='Similar Movies'
      movies={movies}
      action={(movie) => {
       return <AddToWatchListButton movie={movie} />
      }}
    />
  );
};
  
  
export default SimilarMoviePage;