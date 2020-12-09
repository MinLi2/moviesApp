import React from "react";
import { Link } from "react-router-dom";

const AddPeopleReviewButton = ({people}) => {
  return (
    <Link
    className="btn w-100 btn-primary "
    to={{
      pathname: `/review/peopleform`,
      state: {
        people: people
      }
    }}
  >
    Write a Review
  </Link>
);
};

export default AddPeopleReviewButton;