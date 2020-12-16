import React, { lazy, Suspense  } from "react";
import ReactDOM from "react-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom" 
import MoviesContextProvider from "./contexts/moviesContext";
import GenresContextProvider from "./contexts/genresContext";
import PeopleContextProvider from "./contexts/peopleContext";
import { AuthProvider } from "./contexts/AuthContext";   // CHANGED
import SiteHeader from './components/siteHeader';
const UpcomingMoviePage = lazy(() => import("./pages/UpcomingMoviePage"));
const NowPlayingMoviePage = lazy(() => import("./pages/NowPlayingMoviePage"));
const FavoritePeoplePage = lazy(() => import("./pages/favoritePeoplePage"));
const PeoplePage = lazy(() => import("./pages/peopleDetailsPage"));
const MoviePeoplePage = lazy(() => import("./pages/moviePeoplePage"));
const RateMoviePage = lazy(() => import("./pages/rateMoviePage"));
const LoginPage = lazy(() => import("./pages/loginPage"));
const AddMovieReviewPage = lazy(() => import('./pages/addMovieReviewPage'));
const AddPeopleReviewPage = lazy(() => import('./pages/addPeopleReviewPage'));
const SignUpPage = lazy(() => import("./pages/signUpPage"));
const DashboardPage = lazy(() => import("./pages/DashboardPage"));
const PrivateRoute = lazy(() => import("./components/PrivateRoute"));
const ForgotPasswordPage = lazy(() => import("./pages/ForgotPasswordPage"));
const UpdateProfilePage = lazy(() => import("./pages/UpdateProfilePage"));
const TopRatedMovie = lazy(() => import("./pages/topRatedMovie"));
const SimilarMoviesPage= lazy(() => import("./pages/similarMoviePage"));
const HomePage = lazy(() => import("./pages/homePage"));
const MoviePage = lazy(() => import('./pages/movieDetailsPage'));
const FavoriteMoviesPage = lazy(() => import('./pages/favoritesMoviesPage'));
const MovieReviewPage = lazy(() => import("./pages/movieReviewPage"));   


const App = () => {
  return (
      <BrowserRouter>
        <div className="jumbotron">
          <SiteHeader />      {/* New Header  */}
          <div className="container-fluid">
          <MoviesContextProvider>     {/* NEW  */}
          <GenresContextProvider>    {/* NEW */}
          <PeopleContextProvider>
          <AuthProvider>
          <Suspense fallback={<h1>Loading page....</h1>}>
        <Switch>
        <Route exact path="/review/peopleform" component={AddPeopleReviewPage} />
          <Route exact path="/reviews/form" component={AddMovieReviewPage} /> 
          <Route path="/reviews/:id" component={MovieReviewPage} />
          <Route exact path="/movies/upcoming" component={UpcomingMoviePage} />
          <Route exact path="/movies/nowplayingmovie" component={NowPlayingMoviePage} />
          <Route exact path="/movies/topratedmovie" component={TopRatedMovie} />
          <Route exact path="/people" component={MoviePeoplePage} />
          <Route exact path="/people/favoritePeople" component={FavoritePeoplePage} />
          <PrivateRoute exact path="/movies/favorites" component={FavoriteMoviesPage} />
          <PrivateRoute exact path="/Dashboard" component={DashboardPage} />
          <PrivateRoute path="/update-profile" component={UpdateProfilePage} />
          <Route path="/forgot-password" component={ForgotPasswordPage} />
          <Route path="/login" component={LoginPage} />
          <Route path="/signup" component={SignUpPage} />
          <Route path="/peoples/:id" component={PeoplePage} />
          <Route path="/movies/ratemovie/:id" component={RateMoviePage} />
          <Route path="/movies/similar/:id" component={SimilarMoviesPage} />
          <Route path="/movies/:id" component={MoviePage} />
          <Route path="/" component={HomePage} />
          <Redirect from="*" to="/" />
        </Switch>
        </Suspense>
        </AuthProvider>
        </PeopleContextProvider>
        </GenresContextProvider>    {/* NEW */}
        </MoviesContextProvider>     {/* NEW */}
      </div>
    </div>
  </BrowserRouter>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));