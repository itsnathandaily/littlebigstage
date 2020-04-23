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
  const [movies, setMovies] = React.useState(ExistingMovies)

  const searchForMovies = (searchQuery) => {
    //const [...result] = movies.filter(movie => movie.title === query);
    // const [...result] = ExistingMovies.filter(movie => movie.title === query);
    // console.log('result is ', result)
    return ExistingMovies.filter(movie => movie.title === searchQuery);
    //query === '' ? getOrginalMoviesFromLocalStorage() : setMovies(result)
    // query === '' ? setMovies(ExistingMovies) : setMovies(result)
    //query === '' ? return ExistingMovies : return result;
  }






  return (
    <MovieProvider>
      <SearchMoviesContext.Provider value={{ searchForMovies }}>
        <Router>
          <div className="App">
            <Nav ExistingMovies={ExistingMovies} query={query} setQuery={setQuery} searchForMovies={searchForMovies} search={search} setSearch={setSearch} movies={movies} setMovies={setMovies} />

            <Switch>
              <Route exact path="/"  ><MovieList movies={movies} /></Route>
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
