import React from "react";
import TemplatePeoplePage from "../components/templatePeoplePage";
import ReviewPeopleForm from '../components/peopleReviewForm';



const ReviewPeopleFormPage = props => {

  return (
      <TemplatePeoplePage people={props.location.state.people}>
          <ReviewPeopleForm people={props.location.state.people} />
      </TemplatePeoplePage>
  );
};
export default ReviewPeopleFormPage;