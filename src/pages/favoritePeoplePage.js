import React from "react";
import peopleStubAPI from "../api/peopleStubAPI";
import AddPeopleReviewButton from '../components/buttons/addReview'
import PeopleTemplateListPage from "../components/templatePeopleListPage";
const FavoritePeoplePage = props => {

    return (
      <PeopleTemplateListPage
        peoples={peopleStubAPI.getAll()}
        title={"Favorite People"}
        action={people => <AddPeopleReviewButton people={people} />}
      />
    );
  };
export default FavoritePeoplePage