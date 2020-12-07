import React, {useState, useEffect } from "react";
import HeaderPeople from "../components/headerPeople";
import PeopleList from "../components/peopleList";
import { getPeople } from "../api/tmdb-api";



const PeoplePage = () => {
  const [peoples, setPeoples] = useState([]);
  useEffect(() => {
    getPeople().then(peoples => {
      setPeoples(peoples);
    });
  }, []);
  const addToFavoritePeople = movieId => {
    // Find index position of selected movie in the list
    const index = peoples.map(m => m.id).indexOf(peopleId)

    StubAPI.add(peoples[index])
    const updatedList = [...peoples]  // Make a copy of the movie list
    updatedList.splice(index, 1)     // Remove selected movie from home page list
    setPeoples(updatedList)  
  }
  return (
    <>
      <HeaderPeople idPeoples={peoples.length} />
      <PeopleList 
      peoples={peoples} 
      
      buttonHandler={addToFavoritePeople}/>
    </>
  );
}
export default PeoplePage;

