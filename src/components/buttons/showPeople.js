import React, { useContext } from "react";
import {MoviesContext} from "../../contexts/moviesContext";

const ShowPeopleButton = ({ movie }) => {
  const context = useContext(MoviesContext);

  const handleShowPeople = e => {
    e.preventDefault();
    context.showPeople(movie.id);
  };
  return (
    <button
      type="button"
      className="btn w-100 btn-primary"
      onClick={handleShowPeople}
    >
      Show people
    </button>
  );
};

export default ShowPeopleButton;