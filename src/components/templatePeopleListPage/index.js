import React, { useState } from "react";
//import HeaderPeople from "../headerPeople";
import HeaderPeopleList from "../headerPeopleList";
import PeopleList from "../peopleList";

const PeopleTemplateListPage = ({ peoples, title, buttonHandler }) => { 
  const [nameFilter] = useState("");
  let displayedPeoples = peoples
    .filter(m => {
      return m.name.toLowerCase().search(nameFilter.toLowerCase()) !== -1;
    });
  return (
    <>
      <HeaderPeopleList title={title} numPeoples={displayedPeoples.length} />
      <PeopleList
       
       buttonHandler={buttonHandler}
       peoples={displayedPeoples}
    ></PeopleList>
    </>
  );
};

export default PeopleTemplateListPage ;