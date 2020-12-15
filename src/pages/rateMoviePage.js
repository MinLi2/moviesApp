import React from "react";
import {  withRouter } from "react-router-dom";
import RateComponent from "../components/rateComponent";
//import { Link, Route, withRouter } from "react-router-dom";
//import MovieDetails from "../components/movieDetails";
import TemplateRateMoviePage from "../components/templateRateMoviePage";
//import MovieReviews from "../components/movieReviews";
import useRating from "../hooks/useMovie";

const RateMoviePage = props => {
  const { id } = props.match.params;
  const [movie] = useRating(id)
 
  return (
    <>
    {movie ? (
      <>
        <TemplateRateMoviePage movie={movie}>
          
         <RateComponent/> 
        </TemplateRateMoviePage>
        {/* <div className="row">
          <div className="col-12 ">
            {!props.history.location.pathname.endsWith("/reviews") ? (
              <Link
                className="btn btn-primary btn-block active"
                to={`/movies/${id}/reviews`}
              >
                Show Reviews (Extracts)
              </Link>
            ) : (
              <Link
                className="btn btn-primary btn-block active"
                to={`/movies/${id}`}
              >
                Hide Reviews 
              </Link>
            )}
          </div>
        </div> */}
        {/* <Route
          path={`/movies/:id/reviews`}
          render={props => <MovieReviews movie={movie} {...props} />}
        /> */}
      </>
    ) : (
      <p>Waiting for movie details</p>
    )}
  </>
  );
};

export default withRouter(RateMoviePage);


