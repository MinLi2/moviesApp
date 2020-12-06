import React, {useState, useEffect } from "react";
import HeaderPeople from "../components/headerPeople";
import MoviePeopleDetails from "../components/moviePeopleDetails";


const MoviePeoplePage = () => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/person/{person_id}/images?api_key=${process.env.REACT_APP_TMDB_KEY}`
    )
      .then(res => res.json())
      .then(json => {
        console.log(json)
        return json.results
      })
      .then(movies => {
        setMovies(movies);
      });
  }, []);
  return (
    <>
   <HeaderPeople  />
     
      <MoviePeopleDetails  /> 
    </>
  );
};

export default MoviePeoplePage;