import React, {useState, useEffect } from "react";
import PeopleDetailsHeader from "../components/headerPeopleDetails";
import PeopleList from "../components/peopleList";
import { getPeopleDetails } from "../api/tmdb-api";



const PeopleDetailsPage = () => {
  const [peoples, setPeoples] = useState([]);
  useEffect(() => {
    getPeopleDetails().then(peoples => {
      setPeoples(peoples);
    });
  }, []);
  return (
    <>
      <PeopleDetailsHeader idPeoples={peoples.length} />
      <PeopleList peoples={peoples} />
    </>
  );
  };
export default PeopleDetailsPage;
  

