import React, { useEffect, useState } from "react";
import { getSimilarMovies } from "../api/tmdb-api";
import SimilarTemplate from "../components/similarTemplate";

const SimilarMoviesPage = props => {
  const { id } = props.match.params;
  const [similarMovies, setSimilarMovies] = useState([]);

  useEffect(() => {
    getSimilarMovies(id).then(similarMovies => {
      setSimilarMovies(similarMovies);
    });
        
  }, [id]);
  return (
    <SimilarTemplate 
      title= {`Similar Movies`}
      movies={similarMovies}
      action={(movie) => {
       
      }}
    />
);
};

export default SimilarMoviesPage;
