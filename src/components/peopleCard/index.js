import React from "react";
import "./peopleCard.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../../globals/fontawesome";

const peopleCard = ({people}) => {
  return (
    <div className="col-sm-3">
      <div className="card  bg-white">
      <Link to={`/people/${people.id}`}>
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
            <FontAwesomeIcon icon={["fas", "star"]} />
            <span> {people.name}</span>
          </p>
          <p>
            <FontAwesomeIcon icon={["fas", "star"]} />
            <span> {people.popularity}</span>
          </p>
        </div>
        <div className="card-footer">
          <button type="button" className="btn w-100 btn-primary">
            show people details
          </button>
          </div>
      </div>
    </div>
  );
};

export default peopleCard ;