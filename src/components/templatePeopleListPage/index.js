import React, { useState } from "react";
import HeaderPeople from "../headerPeople";
import PeopleList from "../peopleList";

const PeopleTemplateListPage = ({ peoples, name, action }) => { 
  const [nameFilter] = useState("");
  let displayedPeoples = peoples
    .filter(m => {
      return m.name.toLowerCase().search(nameFilter.toLowerCase()) !== -1;
    });
  return (
    <>
      <HeaderPeople numPeoples={displayedPeoples.length} />
      <PeopleList
       action={action}
       peoples={displayedPeoples}
    />
    </>
  );
};

export default PeopleTemplateListPage ;