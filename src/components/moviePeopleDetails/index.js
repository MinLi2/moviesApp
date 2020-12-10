import React from "react";
import "./moviePeopleDetails.css";
export default ({ people }) => {
  return (
    <>
      <h4>popularity</h4>
      <p>{people.popularity}</p>
      <ul className="list-group list-group-horizontal">
        <li key="slh" className="list-group-item list-group-item-dark">
        also_known_as
        </li>
        <li key="kno" className="list-group-item ">
          {people.also_known_as}
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
      <ul className="list-group list-group-horizontal">
        <li key="pch" className="list-group-item list-group-item-dark">
        profile_path
        </li>
        <li key="kno" className="list-group-item ">
          {people.profile_path}
          </li>
      </ul>
      <ul className="list-group list-group-horizontal">
        <li key="pch" className="list-group-item list-group-item-dark">
        known_for_department
        </li>
        <li key="kno" className="list-group-item ">
          {people.known_for_department}
          </li>
      </ul>
      <ul className="list-group list-group-horizontal">
        <li key="pch" className="list-group-item list-group-item-dark">
        biography
        </li>
        <li key="kno" className="list-group-item ">
          {people.biography}
          </li>
      </ul>
    </>
  );
};
