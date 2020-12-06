import React from "react";
import "./headerPeople.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../../globals/fontawesome";

const HeaderPeople = props => {
  return (
    <div className="col-sm-3">
      <div className="card  bg-white">
        <img
          className="card-img-tag center "
          alt={props.people.title}
          src={
            props.people.poster_path
              ? `https://image.tmdb.org/t/p/w500/${props.movie.poster_path}`
              : "./film-poster-placeholder.png"
          }
        />
        <div className="card-body">
          <h4 className="card-title ">{props.movie.title}</h4>
          <p>
            <FontAwesomeIcon icon={["fas", "calendar"]} />
            <span> {props.people.release_date}</span>
          </p>
          
        </div>
        
      </div>
    </div>
  );
};

export default HeaderPeople ;