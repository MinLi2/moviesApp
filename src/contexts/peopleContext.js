import React, { useEffect, createContext, useReducer } from "react";
import { getPeople } from "../api/tmdb-api";

export const PeopleContext = React.createContext(null)
const reducer = (state, action) => {
    switch (action.type) {
      case "add-favorite":
        return {
          peoples: state.peoples.map((m) =>
            m.id === action.payload.people.id ? { ...m, favorite: true } : m
          ),
        };
      case "load":
        return { peoples: action.payload.peoples };
      case "add-review":
        // Completed in next section
        break;
      default:
        return state;
    }
  };

const PeopleContextProvider = (props) => {
    const [state, dispatch] = useReducer(reducer, { peoples: [] });

    const addToFavoritePeople = (peopleId) => {
      const index = state.peoples.map((m) => m.id).indexOf(peopleId);
      dispatch({ type: "add-favorite", payload: { people: state.peoples[index] } });
    };
  
    const addReview = (people, review) => {
       // Completed in next section
    };
    useEffect(() => {
      getPeople().then((peoples) => {
        dispatch({ type: "load", payload: { peoples } });
      });
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
  
    return (
      <PeopleContext.Provider
        value={{
          peoples: state.peoples,
          favorites: state.favorites,
          addToFavoritePeople: addToFavoritePeople,
          addReview: addReview,
        }}
      >
        {props.children}
      </PeopleContext.Provider>
    );
  };

export default PeopleContextProvider