import React from "react";
import ReactDOM from "react-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import HomePage from "./pages/homePage";
import MoviePage from './pages/movieDetailsPage'
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom"    // CHANGED
import FavoriteMoviesPage from './pages/favoritesMoviesPage'       // NEW
import MovieReviewPage from "./pages/movieReviewPage";
import SiteHeader from './components/siteHeader'
import UpcomingMoviePage from "./pages/UpcomingMoviePage";
import NowPlayingMoviePage from "./pages/NowPlayingMoviePage";
import SimilarMoviePage from "./pages/SimilarMoviePage";
import PeopleDetailsPage from "./pages/peopleDetailsPage";
import MoviePeoplePage from "./pages/moviePeoplePage";
import MoviesContextProvider from "./contexts/moviesContext";
import GenresContextProvider from "./contexts/genresContext";
import AddMovieReviewPage from './pages/addMovieReviewPage'

const App = () => {
  return (
      <BrowserRouter>
        <div className="jumbotron">
          <SiteHeader />      {/* New Header  */}
          <div className="container-fluid">
          <MoviesContextProvider>     {/* NEW  */}
          <GenresContextProvider>    {/* NEW */}
        <Switch>
          <Route exact path="/reviews/form" component={AddMovieReviewPage} /> 
          <Route path="/reviews/:id" component={MovieReviewPage} />
          <Route exact path="/movies/favorites" component={FavoriteMoviesPage} />
          <Route exact path="/movies/upcoming" component={UpcomingMoviePage} />
          <Route exact path="/movies/nowplayingmovie" component={NowPlayingMoviePage} />
          <Route exact path="/people" component={MoviePeoplePage} />
          <Route exact path="/people/peopleDetailsPage" component={PeopleDetailsPage} />
          <Route exact path="/movies/similar" component={SimilarMoviePage} />
          <Route path="/movies/:id" component={MoviePage} />
          <Route path="/" component={HomePage} />
          <Redirect from="*" to="/" />
        </Switch>
        </GenresContextProvider>    {/* NEW */}
        </MoviesContextProvider>     {/* NEW */}
      </div>
    </div>
  </BrowserRouter>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));