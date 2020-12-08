import React from "react";
import People from "../peopleCard/";
import "./peopleList.css";

const PeopleList =  props =>  {
  const peopleCards = props.peoples.map(m => (
    <People key={m.id} people={m}   />
  ));
  return <div className="row peoples bg-info">{peopleCards}</div>;
};

export default PeopleList;