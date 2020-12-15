import React from "react";
import TopRatedCard from "../topRatedCard/";
import "./top.css";

const TopRatedList = ({movies, action}) => {
  const movieCards = movies.map(m => (
    <TopRatedCard key={m.id} movie={m} action={action} />
  ));
  return <div className="row movies bg-info">{movieCards}</div>;
};

export default TopRatedList;