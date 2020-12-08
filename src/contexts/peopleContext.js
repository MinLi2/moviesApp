import React, { useState, useEffect } from "react";
import peopleStubAPI from "../api/peopleStubAPI";

import { getPeople } from "../api/tmdb-api";

export const PeopleContext = React.createContext(null)

const PeopleContextProvider = props => {
  const [peoples, setPeoples] = useState([]);

  const addToFavoritePeople = peopleId => {
    setPeoples(peoples => {
      const index = peoples.map(m => m.id).indexOf(peopleId);
      peopleStubAPI.add(peoples[index])
      peoples.splice(index, 1)
      return [...peoples]
    });
  };
  useEffect(() => {
    getPeople().then(peoples => {
      setPeoples(peoples);
    });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <PeopleContext.Provider
      value={{
        peoples: peoples,
        addToFavoritePeople: addToFavoritePeople
      }}
    >
      {props.children}
    </PeopleContext.Provider>
  );
};

export default PeopleContextProvider