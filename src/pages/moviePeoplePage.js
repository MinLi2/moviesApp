import React, {useState, useEffect } from "react";

import peopleStubAPI from "../api/peopleStubAPI";
import PeopleTemplateListPage from '../components/templatePeopleListPage'
import { getPeople } from "../api/tmdb-api";



const PeoplePage = () => {
  const [peoples, setPeoples] = useState([]);
  useEffect(() => {
    getPeople().then(peoples => {
      setPeoples(peoples);
    });
  }, []);
  const addToFavoritePeople = peopleId => {
    setPeoples(peoples => {
      const index = peoples.map(m => m.id).indexOf(peopleId);
      peopleStubAPI.add(peoples[index]);
      let newPeoplesState = [...peoples]
      newPeoplesState.splice(index, 1);
      return newPeoplesState;
    });
  };
  return (
    
     <PeopleTemplateListPage
        title='Discover Movies'
        peoples={peoples}
        buttonHandler={addToFavoritePeople}
      />
  );
}
export default PeoplePage;

