// export const getMovies = () => {
//     return fetch(
//       `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&include_adult=false&page=1`
//     )
//       .then(res => res.json())
//       .then(json => json.results);
//   };
export const getMovies = () => {
  return fetch(
    '/api/movies',{headers:{
      'Authorization': window.localStorage.getItem('token') 
    },
  method:'get',
    }
    ).then(res => res.json());
    
};
  
  export const getMovie = id => {
    return fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.REACT_APP_TMDB_KEY}`
    ).then(res => res.json());
  };
  
  export const getGenres = () => {
    return fetch(
      "https://api.themoviedb.org/3/genre/movie/list?api_key=" +
        process.env.REACT_APP_TMDB_KEY +
        "&language=en-US"
    )
      .then(res => res.json())
      .then(json => json.genres);
  };
  export const getMovieReviews = id => {
    return fetch(
      `https://api.themoviedb.org/3/movie/${id}/reviews?api_key=${process.env.REACT_APP_TMDB_KEY}`
    )
      .then(res => res.json())
      .then(json => json.results);
  };
  export const getUpcomingMovie = id => {
    return fetch(
      `https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&page=1`
    )
      .then(res => res.json())
      .then(json => json.results);
  };

  export const getNowPlayingMovie = id => {
    return fetch(
      `https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&page=1`
    )
      .then(res => res.json())
      .then(json => json.results);
  };

 

  // export const getPeople = id => {
  //   return fetch(
  //     `https://api.themoviedb.org/3/person/popular?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&page=1`
  //   )
  //     .then(res => res.json())
  //     .then(json => json.results);
  // };

  export const getPeople = () => {
    return fetch(
      '/api/actors',{headers:{
        'Authorization': window.localStorage.getItem('token') 
      },
    method:'get',
      }
      ).then(res => res.json());
      
  };
  export const getPeopleDetails = id => {
    return fetch(
      `https://api.themoviedb.org/3/person/${id}?api_key=${process.env.REACT_APP_TMDB_KEY}`
    ).then(res => res.json());
  };
  
  export const rateMovie = id => {
    return fetch(
      `https://api.themoviedb.org/3/movie/${id}/rating?api_key=${process.env.REACT_APP_TMDB_KEY}`
    )
      .then(res => res.json())
      
  };

  export const getTopRatedMovie = id => {
    return fetch(
      `https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&page=1`
    )
      .then(res => res.json())
      .then(json => json.results);
  };

  export const getSimilarMovies = id => {
    return fetch(
      `https://api.themoviedb.org/3/movie/${id}/similar?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&page=1`
    )
      .then(res => res.json())
      .then(json => json.results);
  };
