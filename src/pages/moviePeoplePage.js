import React, {useState, useEffect } from "react";
import Header from "../components/headerPeople";
import PeopleList from "../components/peopleList";
import { getPeople } from "../api/tmdb-api";



const PeoplePage = () => {
  const [peoples, setPeoples] = useState([]);
  useEffect(() => {
    getPeople().then(peoples => {
      setPeoples(peoples);
    });
  }, []);
  return (
    <>
      <Header idPeoples={peoples.length} />
      <PeopleList peoples={peoples} />
    </>
  );
}
export default PeoplePage;