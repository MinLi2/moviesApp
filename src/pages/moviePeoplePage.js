import React, {useState, useEffect } from "react";

//import StubAPI from "../api/stubAPI";
import PeopleTemplateListPage from '../components/templatePeopleListPage'
import { getPeople } from "../api/tmdb-api";



const PeoplePage = () => {
  const [peoples, setPeoples] = useState([]);
  useEffect(() => {
    getPeople().then(peoples => {
      setPeoples(peoples);
    });
  }, []);
 
  return (
    
     <PeopleTemplateListPage
        title='Discover Movies'
        peoples={peoples}
        
      />
  );
}
export default PeoplePage;

