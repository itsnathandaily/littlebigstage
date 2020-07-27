import React from 'react';
import './App.css';
import MovieList from './components/MovieList';
import Nav from './components/Nav';
import AddMovie from './components/AddMovie';
import MovieReviewDetails from './components/MovieReviewDetails';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { storeMovie, selectedMovie } from './actions';
import RegisterLoginContainer from './containers/RegisterLoginContainer';
import api from './apis';
import AddReview2 from './components/AddReview2';
import Login from './components/Login';
export const SearchMoviesContext = React.createContext({});

function App() {
  const ExistingMovies = useSelector((state) => state.existingMovies);
  const USERLOGGEDIN = useSelector((state) => state.user.username);
  const isMovieSelected = useSelector((state) => state.SelectedMovie);
  const [ListMovies, setListMovies] = React.useState(ExistingMovies);
  const dispatch = useDispatch();
  const [List, setList] = React.useState(null);
  const [use, setUse] = React.useState(false);

  React.useEffect(() => {
    api
      .posts()
      .getAllMovies()
      .then((res) => {
        const result = res.data.reverse();

        setList(result);

        result.forEach((movie) => {
          let reviewArray = [];
          movie.reviews.forEach((review) => {
            let obj = {
              date: review.date,
              rating: review.rating,
              why: review.why,
              email: review.username,
            };
            reviewArray.push(obj);
          });
          dispatch(storeMovie([{ id: movie._id, title: movie.title, category: movie.category, image: movie.image, reviews: reviewArray }]));
        });
      });
  }, []);

  const searchForMovies = (searchQuery) => {
    return ExistingMovies.filter((movie) => movie.title.toLowerCase().includes(searchQuery.toLowerCase()));
  };

  return (
    <SearchMoviesContext.Provider value={{ searchForMovies, ExistingMovies, setListMovies, dispatch, USERLOGGEDIN, setList }}>
      <Router>
        <div className="App">
          <Nav
            ExistingMovies={ExistingMovies}
            searchForMovies={searchForMovies}
            ListMovies={ListMovies}
            setListMovies={setListMovies}
            USERLOGGEDIN={USERLOGGEDIN}
          />

          <Switch>
            <Route exact path="/">
              <MovieList ListMovies={ListMovies} />
            </Route>
            <Route path="/addcontent" exact>
              <AddMovie />
            </Route>
            {/* <Route path="/reviewdetails/:title" component={MovieReviewDetails}></Route> */}
            <Route path="/reviewdetails" exact component={MovieReviewDetails}></Route>
            {/* <Route path="/register" exact  ><Register /></Route> */}
            <Route path="/register" exact>
              <RegisterLoginContainer />
            </Route>
            <Route path="/login" exact  ><Login /></Route>
            <Route path="/addreview" exact>
              <AddReview2 />
            </Route>
          </Switch>
        </div>
      </Router>
    </SearchMoviesContext.Provider>
  );
}

export default App;
