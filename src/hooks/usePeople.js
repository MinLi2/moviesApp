import { useEffect, useState } from "react";
import {getPeopleDetails} from '../api/tmdb-api'

const usePeople = id => {
  const [people, setPeople] = useState(null);
  useEffect(() => {
    getPeopleDetails(id).then(people => {
      setPeople(people);
    });
  }, [id]);
  return [people, setPeople];
};

export default usePeople;