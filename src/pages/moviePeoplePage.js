import React, {useContext} from "react";

//import peopleStubAPI from "../api/peopleStubAPI";
import PeopleTemplateListPage from '../components/templatePeopleListPage'
//import { getPeople } from "../api/tmdb-api";
import { PeopleContext } from "../contexts/peopleContext";



const PeoplePage = () => {
  const context = useContext(PeopleContext) 
  return (
    
     <PeopleTemplateListPage
        title='No.People'
        peoples={context.peoples}
        buttonHandler={context.addToFavoritePeople}
      />
  );
}
export default PeoplePage;

