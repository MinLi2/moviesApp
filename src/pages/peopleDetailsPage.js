import React, {useState, useEffect}  from "react";
import PeopleDetailsHeader from "../components/headerPeopleDetails";
import MoviePeopleDetails from "../components/moviePeopleDetails";

//import { getPeopleDetails } from "../api/tmdb-api";

//import MovieDetails from "../components/movieDetails";

const PeopleDetailsPage = props => {
  const { id } = props.match.params
  const [people, setPeople] = useState(null)
  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/person/${id}?api_key=${process.env.REACT_APP_TMDB_KEY}`
    ).then(res => res.json())    
    .then(people => {
      setPeople(people);
    })
   
  }, [id])
  return (
    <>
      {people ? (
        <>
          <PeopleDetailsHeader people={people} />
          <div className="row">
            <div className="col-3">
              <img
                 alt={people.name}
                 src={
                   people.profile_path
                     ? `https://image.tmdb.org/t/p/w500/${people.profile_path}`
                     : "./film-poster-placeholder.png"
                 }
                className="people"
                
              />
            </div>
            <div className="col-9">
              <MoviePeopleDetails people={people} />
            </div>
          </div>
        </>
        ) : (
        <p>Waiting for movie details</p>
      )}
    </>
  );
};
export default PeopleDetailsPage;
  

