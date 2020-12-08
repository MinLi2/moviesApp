import React from "react";


import HeaderPeople from '../headerPeople';
//import PeopleList from "../components/peopleList";
//import "./peoplepage.css";

const TemplatePeopleListPage = ({ people, children }) => {
  return (
    <>
      <HeaderPeople people={people} />
      <div className="row">
        <div className="col-3">
          <img
            src={
                people.profile_path
                ? `https://image.tmdb.org/t/p/w500/${people.profile_path}`
                : "./film-poster-placeholder.png"
            }
            className="people"
            alt={people.name}
          />
        </div>
        <div className="col-9">{children}</div>
      </div>
    </>
  );
};

export default TemplatePeopleListPage;

