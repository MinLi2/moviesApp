import React from "react";
import PageTemplate from "../components/templateMoviePage";
import useRating from "../hooks/useRating";

const RateMoviePage = props => {
    const { id } = props.match.params;
    const [movie] = useRating(id)
   
    return (
      <>
      {movie ? (
        <>
          <PageTemplate movie={movie}>
          </PageTemplate>
  
   
          </>
    ) : (
      <p>Waiting for movie details</p>
    )}
  </>
  );
};

export default RateMoviePage;