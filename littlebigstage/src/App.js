import React from 'react';
import './App.css';
import MovieList from './components/MovieList'
import Nav from './components/Nav';
import { MovieProvider } from './contexts/MovieContext'
import { ExistingMovieProvider } from './contexts/ExistingMovieContext';
import AddMovie from './components/AddMovie';
import MovieReviewDetails from './components/MovieReviewDetails'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { StarRating } from './components/StarRating';
import StarRatingRender from './components/StarRatingRender';
export const SearchMoviesContext = React.createContext()


function App() {
  const ExistingMovies = useSelector(state => state.existingMovies)

  const [search, setSearch] = React.useState("");
  const [query, setQuery] = React.useState("")
  const [ListMovies, setListMovies] = React.useState(ExistingMovies)

  const searchForMovies = (searchQuery) => {
    return ExistingMovies.filter(movie => movie.title === searchQuery);
  }





  return (
    <MovieProvider>
      <SearchMoviesContext.Provider value={{ searchForMovies, ExistingMovies }}>
        <Router>
          <div className="App">
            <Nav ExistingMovies={ExistingMovies} query={query} setQuery={setQuery} searchForMovies={searchForMovies} search={search} setSearch={setSearch} ListMovies={ListMovies} setListMovies={setListMovies} />

            <Switch>
              <Route exact path="/"  ><MovieList ListMovies={ListMovies} /></Route>
              <Route path="/addcontent" exact  ><AddMovie /></Route>
              <Route path="/reviewdetails/:title" component={MovieReviewDetails} ></Route>
            </Switch>


          </div>
        </Router>
      </SearchMoviesContext.Provider>
    </MovieProvider>
  );
}


export default App;
