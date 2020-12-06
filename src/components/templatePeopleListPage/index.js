import React, { useState } from "react";
import Header from "../headerPeoole";
import PeopleList from "../peopleList";

const peopleListPageTemplate = ({peoples, id, buttonHandler}) => {
  let displayedPeoples = peoples
    .filter(m => {
      return m.id.toLowerCase().search(nameFilter.toLowerCase()) !== -1;
    })
    .filter(m => {
      return  genre > 0
        ? m.genre_ids.includes(Number(genreFilter))
        : true;
    });

  const handleChange = (type, value) => {
    if (type === "name") setNameFilter(value);
    else setGenreFilter(value);
  };

  return (
    <>
      <Header title={title} numMovies={displayedMovies.length} />
      <FilterControls onUserInput={handleChange} numMovies={displayedMovies.length}/>
      <MovieList
        buttonHandler={buttonHandler}
        movies={displayedMovies}
      ></MovieList>
    </>
  );
};

export default peopleListPageTemplate ;