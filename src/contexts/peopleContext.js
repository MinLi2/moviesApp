import React, { useEffect, createContext, useReducer } from "react";
import { getPeople } from "../api/tmdb-api";

export const PeopleContext = createContext(null);
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
     
     
      case "add-peoplereview":
        return {
          peoples: state.peoples.map((m) =>
            m.id === action.payload.people.id
              ? { ...m, peoplereview: action.payload.peoplereview }
              : m
          ),       
        };
      default:
        return state;
    }
  };
  const PeopleContextProvider = (props) => {
    const [state, dispatch] = useReducer(reducer, { peoples: []});
    const addToFavoritePeople = (peopleId) => {
      const index = state.peoples.map((m) => m.id).indexOf(peopleId);
      dispatch({ type: "add-favorite", payload: { people: state.peoples[index] } });
    };
  
    
    const addPeopleReview = (people, peoplereview) => {
      dispatch({ type: "add-peoplereview", payload: { people, peoplereview } });
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
        addToFavoritePeople: addToFavoritePeople,
        addPeopleReview: addPeopleReview,        
        }}
      >
        {props.children}
      </PeopleContext.Provider>
    );
  };
export default PeopleContextProvider;