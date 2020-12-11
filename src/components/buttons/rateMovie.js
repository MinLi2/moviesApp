import React, { useContext } from "react";
import {MoviesContext} from "../../contexts/moviesContext";

const  RateMovieButton = ({ movie }) => {
  const context = useContext(MoviesContext);

  const handleRateMovie = e => {
    e.preventDefault();
    context.addTorateMovie(movie.id);
  };
  return (
    <button
      type="button"
      className="btn w-100 btn-primary"
      onClick={handleRateMovie}
    >
     Rate Movie
    </button>
  );
};
export default RateMovieButton;