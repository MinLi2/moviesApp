import React from "react";
import People from "../peopleCard/";
import "./peopleList.css";

const PeopleList =  ({peoples, action}) => {
  const peopleCards = peoples.map(m => (
    <People key={m.id} people={m} action={action} />
  ));
  return <div className="row peoples bg-info">{peopleCards}</div>;
};

export default PeopleList;