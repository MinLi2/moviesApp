import React from "react";
import People from "../headerPeople/";
import "./moviePeopleDetails.css";

const MoviePeopleDetails = props => {
  const moviePeopleDetails = props.movies.map(m => (
    <People key={m.id} people={m} />
  ));
  return <div className="row movies bg-info">{moviePeopleDetails}</div>;
};

export default MoviePeopleDetails;