import React from "react";
import "./moviePeopleDetails.css";

export default ({ people }) => {
  return (
    <>
      <h4>Overview</h4>
      <p>{people.overview}</p>
      <ul className="list-group list-group-horizontal">
        <li key="bir" className="list-group-item list-group-item-dark">
        release_date
        </li>
        <li key="bir" className="list-group-item ">
          {people.release_date}
        </li>
        <li key="kno" className="list-group-item list-group-item-dark">
        vote_average
        </li>
        <li key="kno" className="list-group-item ">
          {people.vote_average}
        </li>
      </ul>

      <ul className="list-group list-group-horizontal">
        <li key="gh" className="list-group-item list-group-item-dark">
          biography
        </li>
        <li key="kno" className="list-group-item ">
          {people.biography}
        </li>
      </ul>
      <ul className="list-group list-group-horizontal">
        <li key="slh" className="list-group-item list-group-item-dark">
         popularity
        </li>
        <li key="kno" className="list-group-item ">
          {people.popularity}
        </li>
      </ul>
      <ul className="list-group list-group-horizontal">
        <li key="pch" className="list-group-item list-group-item-dark">
        place_of_birth
        </li>
        <li key="kno" className="list-group-item ">
          {people.place_of_birth}
        </li>
      </ul>
    </>
  );
};