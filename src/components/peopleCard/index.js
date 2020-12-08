import React from "react";
import { Link } from "react-router-dom";
import "./peopleCard.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../../globals/fontawesome";

const PeopleCard = props => {
  return (
    <div className="col-sm-3">
      <div className="card  bg-white">
      <Link to={`/peoples/${props.people.id}`}>
        <img
          className="card-img-tag center "
          alt={props.people.name}
          src={
            props.people.profile_path
              ? `https://image.tmdb.org/t/p/w500/${props.people.profile_path}`
              : "./film-poster-placeholder.png"
          }
        />
      </Link>
        <div className="card-body">
          <h4 className="card-title ">{props.people.name}</h4>
          <p>
            <FontAwesomeIcon icon={["fas", "calendar"]} />
            <span> {props.people.release_date}</span>
          </p>
          <p>
            <FontAwesomeIcon icon={["fas", "star"]} />
            <span> {props.people.vote_average}</span>
          </p>
        </div>
        <div className="card-footer">
          <button type="button" className="btn w-100 btn-primary">
            Add to Favorites
          </button>
        </div>
      </div>
    </div>
  );
};

export default PeopleCard ;