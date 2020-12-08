import React from "react";
import StubAPI from "../api/stubAPI";
import PeopleTemplateListPage from "../components/templatePeopleListPage";

const FavoritePeoplePage = props => {
  const toDo = () => true;

  return (
    <PeopleTemplateListPage
      peoples={StubAPI.getAll()}
      title={"Favorite People"}
      buttonHandler={toDo}
    />
  );
};

export default FavoritePeoplePage;