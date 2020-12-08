import React from "react";
import PeopleHeader from "../components/headerPeopleDetails";
import PeopleDetails from "../components/moviePeopleDetails";
import usePeople from "../hooks/usePeople";
const PeoplePage = props => {
  const { id } = props.match.params
  const [people] = usePeople(id) 
  return (
    <>
      {people ? (
        <>
          <PeopleHeader people={people} />
          <div className="row">
            <div className="col-3">
              <img
                src={
                  people.profile_path
                    ? `https://image.tmdb.org/t/p/w500/${people.profile_path}`
                    : "./film-poster-placeholder.png"
                }
                className="movie"
                alt={people.name}
              />
            </div>
            <div className="col-9">
              <PeopleDetails people={people} />
            </div>
          </div>
        </>
        ) : (
        <p>Waiting for movie details</p>
      )}
    </>
  );
};

export default PeoplePage;