import React from "react";
//import {MoviesContext} from "../../contexts/moviesContext";

const  ScoreMovieButton = ({ movie }) => {
  //const context = useContext(MoviesContext);

 // const handleScoreMovie = e => {
  //  e.preventDefault();
  //  context.scoreMovie(movie.id);
  //};
  return (
    <button
      //type="button"
      //className="btn w-100 btn-primary"
      //onClick={handleScoreMovie}
    >
      Score Movie
      <a href=" /people" >Get people</a>
    </button>
  );
};

export default ScoreMovieButton;