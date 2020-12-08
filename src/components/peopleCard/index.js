import React from "react";
import { Link } from "react-router-dom";
import "./peopleCard.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../../globals/fontawesome";

const PeopleCard =({people, action}) => {

  return (
    <div className="col-sm-3">
      <div className="card  bg-white">
      <Link to={`/peoples/${people.id}`}>
        <img
          className="card-img-tag center "
          alt={people.name}
          src={
            people.profile_path
              ? `https://image.tmdb.org/t/p/w500/${people.profile_path}`
              : "./film-poster-placeholder.png"
          }
        />
      </Link>
        <div className="card-body">
          <h4 className="card-title ">{people.name}</h4>
          <p>
            <FontAwesomeIcon icon={["fas", "calendar"]} />
            <span> {people.release_date}</span>
          </p>
          <p>
            <FontAwesomeIcon icon={["fas", "star"]} />
            <span> {people.vote_average}</span>
          </p>
        </div>
        <div className="card-footer">
        {action(people)}
        </div>
      </div>
    </div>
  );
};

export default PeopleCard ;