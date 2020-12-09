import React, {useContext} from "react";
//import peopleStubAPI from "../api/peopleStubAPI";
import PeopleTemplateListPage from '../components/templatePeopleListPage'
//import { getPeople } from "../api/tmdb-api";
import { PeopleContext } from "../contexts/peopleContext";
import AddToFavoritePeopleButton from '../components/buttons/addToFavouritePeople';

const PeoplePage = () => {
  const context = useContext(PeopleContext) 
  const peoples = context.peoples.filter((m) => {  // New
    return !("favorite" in m);
  });
  return (
    
     <PeopleTemplateListPage
        title='No.People'
        peoples={peoples}
        action={(people) => {
          return <AddToFavoritePeopleButton people={people} /> 
        }}
      />
  );
}
export default PeoplePage;

