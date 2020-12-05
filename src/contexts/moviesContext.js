import React, { useEffect, createContext, useReducer } from "react";
import { getMovies, getUpcomingMovie,getSimilarMovie } from "../api/tmdb-api";
export const MoviesContext = createContext(null);
const reducer = (state, action) => {
  switch (action.type) {
    case "add-favorite":
      return {
        movies: state.movies.map((m) =>
          m.id === action.payload.movie.id ? { ...m, favorite: true } : m
        ),
        upcoming: [...state.upcoming],
        similar: [...state.similar]
      };
    case "add-watchlist":
      return {
        upcoming: state.upcoming.map((m) =>
          m.id === action.payload.movie.id ? { ...m, watchlist: true } : m
        ),
        movies: [...state.movies],
        similar: [...state.similar]
      };
   
    case "load":
      return { movies: action.payload.movies, upcoming: [...state.upcoming], similar: [...state.similar] };
    case "load-upcoming":
      return { upcoming: action.payload.movies, movies: [...state.movies], similar: [...state.similar] };

    case "load-similar":
      return { similar: action.payload.movies, movies: [...state.movies], upcoming: [...state.upcoming] };
    case "add-review":
      return {
        movies: state.movies.map((m) =>
          m.id === action.payload.movie.id
            ? { ...m, review: action.payload.review }
            : m
        ),
        upcoming: [...state.upcoming],
        similar: [...state.similar]
      };
    default:
      return state;
  }
};
const MoviesContextProvider = (props) => {
  const [state, dispatch] = useReducer(reducer, { movies: [], upcoming: [],  similar: []});
  const addToFavorites = (movieId) => {
    const index = state.movies.map((m) => m.id).indexOf(movieId);
    dispatch({ type: "add-favorite", payload: { movie: state.movies[index] } });
  };
  const addToWatchList = (movieId) => {
    const index = state.upcoming.map((m) => m.id).indexOf(movieId);
    dispatch({ type: "add-watchlist", payload: { movie: state.upcoming[index] } });
  };
  
  const addReview = (movie, review) => {
    dispatch({ type: "add-review", payload: { movie, review } });
  };
  useEffect(() => {
    getMovies().then((movies) => {
      dispatch({ type: "load", payload: { movies } });
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  useEffect(() => {
    getUpcomingMovie().then((movies) => {
      dispatch({ type: "load-upcoming", payload: { movies } });
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  
  useEffect(() => {
    getSimilarMovie().then((movies) => {
      dispatch({ type: "load-similar", payload: { movies } });
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <MoviesContext.Provider
      value={{
        movies: state.movies,
        upcoming: state.upcoming,
        similar: state.similar,
        addToFavorites: addToFavorites,
        addReview: addReview,
        addToWatchList: addToWatchList,
       
       
      }}
    >
      {props.children}
    </MoviesContext.Provider>
  );
};
export default MoviesContextProvider;