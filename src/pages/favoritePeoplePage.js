import React from "react";
import peopleStubAPI from "../api/peopleStubAPI";

import PeopleTemplateListPage from "../components/templatePeopleListPage";
const FavoritePeoplePage = () => {
    const toDo = () => true;

    return (
      <PeopleTemplateListPage
        movies={peopleStubAPI.getAll()}
        title={"Favorite People"}
        buttonHandler={toDo}
      />
    );
  };
export default FavoritePeoplePage