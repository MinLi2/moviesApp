# Assignment 1 - ReactJS app.

Name: Min Li

## Features.
 
+ Now playing movie: you can view and rate the movies that are showing now.

+ Top rated movie: you can view and rate the highest rated movies now.

+ Similar: you can view similar movies through the buttons attached to the movie detail page.

+ Movie people: you can view the actor information, click the character picture to view the character details. You can add the favorite actor to the list of favorite people.

+ Favoritepeople: you can view and comment on the people who have been added to favoritelist.

+ Sign up: realize the registration function, which can be linked to the login page.

+ Log in: the login function can be linked to the forget password page and the registration page.

+ Forget password: to reset the password function, you can link to the login and registration page.

+ Dashboard: add private path to favorite function and realize logout function.

## Setup requirements (If required).
npm install
npm install antd --save
npm install --save @ant-design/icons
npm i firebase
npm i bootstrap react-bootstrap
## API Data Model.



+ https://api.themoviedb.org/3/movie/now_playing - get information and a list of nowplaying movie.
+ https://api.themoviedb.org/3/person/popular -  get information and a list of movie actors.
+ https://api.themoviedb.org/3/person/${id} - get detailed information on a specific movie people.
+ https://api.themoviedb.org/3/movie/top_rated - get information and a list of top rated movie.
+ https://api.themoviedb.org/3/movie/${id}/similar - get a list of the similar movie.

## App Design.

### Component catalogue (If required).

![][stories] people page , movie people detail page, rate movie page.

### UI Design.



![][topratedmovie]
>Shows the movie list of top-rated movie. Clicking the 'Rate movie' button can rate movies

![][similarmovie]
>Shows the similar movie accroding to the id of movies. 

![][people]
>Shows the people list. Clicking the 'Add to favourite people' button will add the people into favourite list.

![][favouritepeople]
>Shows detailed information on a movie. Clicking the 'Show Reviews' button will display extracts from critic reviews.

![][peopledetails]
>Shows the people details. 

![][peopleform]
>Show the function of writing reviews for the actors

![][login]
>Shows the log in interface. Operate the log in function.

![][signup]
>Shows the sign up interface.  Operate the sign up function.

![][dashboard]
>Shows the dashboard. Clicking the 'Show Reviews' button will display extracts from critic reviews.

![][forgetpassword]
>Shows the forget password interface. Reset the password.

![][updateprofile]
>Shows the update profile interface.  Operate the update profile function.

## Routing.



+ /movies/favorites (protected) - displays the user's favorite movies selection.
+ /reviews/:id (public) - displays the full text of a movie review.
+ /review/peopleform" - display the review form of actors
+ /movies/nowplayingmovie" - display the movies which is now playing
+ /movies/topratedmovie" - display the movies which is top rated
+ /people" - display the all actors
+ /people/favoritePeople" - displays the user's favorite people selection.
+ /Dashboard" - display the situation of the user's sign up.
+ /update-profile" - display the update profile page
+ /forgot-password" - display the interface of reset password.
+ /login" - display the log in page
+ /signup" - display the sign up page
+ /peoples/:id" - display the details of actors
+ /movies/ratemovie/:id - diplay the movie rating interface
+ /movies/similar/:id - display the similar tupies of movies


### Data hyperlinking.



![][cardLink]
> Clicking a card causes the display of that movie's details. 

![][peoplecardLink]
> Clicking a card causes the display of that people's details.

![][reviewLink]
>Clicking the 'Full Review' for a review extract will display the full text of the review.

![][forgetpasswordlink]
>Clicking the 'forgetpassword' to reset the password.

![][loginlink]
>Clicking the 'login' to log in.

![][signuplink]
>Clicking the 'signup' to sign up.

![][logoutlink]
>Clicking the 'logout' to log out.

![][cancellink]
>Clicking the 'cancel' to cancel the operation.
---------------------------------

## Testing.

Cypress Dashboard URL: https://dashboard.cypress.io/organizations/fe266867-b744-431b-9e7e-cfd888fc14c6/projects

### Advanced Testing (If required).



+ cypress/integration/movieReviewPage.spec.js - test the movieReview page when the Review id is invalid. 
+ cypress/integration/movieDetails.spec.js - test when a movie has no reviews.
+ cypress/integration/signup.spec.js - test when no password or email.

## Independent learning (If relevant).

some functions about css.                                        https://www.youtube.com/watch?v=sZ0bZGfg_m4&t=1052s.
Basic teaching of cypress.                                       https://docs.cypress.io/api/cypress-api/custom-commands.html#Syntax.
Basic teaching of writing login interface with firebase.         https://www.youtube.com/watch?v=PKwu15ldZ7k&t=537s.  
Basic teaching of Ant Design - Third party react UI Library。    https://ant.design/components/rate-cn/#header
---------------------------------


[stories]: ./public/storybook.png
[favourite people]:./public/favouritepeople.png
[topratedmovie]: ./public/toprated.png
[similarmovie]: ./public/similar.png
[people]: ./public/people.png
[peopledetails]: ./public/peopledetails.png
[login]:./public/login.png
[signup]:./public/signup.png
[dashboard]:./public/dashboard.png
[forgetpassword]:./public/forgetpassword.png
[updateprofile]:./public/updateprofile.png
[peopleform]:./public/peopleform.png
[forgetpasswordlink]:./public/forgetpasswordlink.png
[loginlink]:./public/loginlink.png
[signuplink]:./public/signuplink.png
[logoutlink]:./public/logoutlink.png
[cancellink]:./public/cancellink.png


