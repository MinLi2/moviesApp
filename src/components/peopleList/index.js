import React from "react";
import People from "../peopleCard/";
import "./peopleList.css";

const PeopleList = ({peoples, action}) => {
  const peoplecards = peoples.map(m => (
    <People key={m.id} people={m} action={action}  buttonHandler={props.buttonHandler}/>
  ));
  return <div className="row peoples bg-info">{peoplecards}</div>;
};

export default PeopleList;