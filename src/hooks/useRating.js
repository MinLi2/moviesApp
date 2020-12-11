import { useEffect, useState } from "react";
import {rateMovie} from '../api/tmdb-api'

const useRating = id => {
  const [movie, setMovie] = useState(null);
  useEffect(() => {
    rateMovie(id).then(movie => {
      setMovie(movie);
    });
  }, [id]);
  return [movie, setMovie];
};

export default useRating;
