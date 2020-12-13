import React from "react";
import RateMovie from "../rateMovieCard/";
import "./rateMovieList.css";

const RateMovieList = ({movies, action}) => {
  const movieCards = movies.map(m => (
    <RateMovie key={m.id} movie={m} action={action} />
  ));
  return <div className="row movies bg-info">{movieCards}</div>;
};

export default RateMovieList;