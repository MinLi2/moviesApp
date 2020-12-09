import React, {useContext} from "react";
import AddPeopleReviewButton from '../components/buttons/addPeopleReview'
import PeopleTemplateListPage from "../components/templatePeopleListPage";
import {PeopleContext} from '../contexts/peopleContext'
const FavoritePeoplePage = props => {
    const context = useContext(PeopleContext);
    const favorites = context.peoples.filter( m => m.favorite )

    return (
      <PeopleTemplateListPage
        peoples={favorites}
        title={"Favorite People"}
        action={people => <AddPeopleReviewButton people={people} />}
      />
    );
  };
export default FavoritePeoplePage;