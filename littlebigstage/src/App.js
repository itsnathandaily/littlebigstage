import React from 'react';
import './App.css';
import MovieList from './components/MovieList'
import Nav from './components/Nav';
import AddMovie from './components/AddMovie';
import MovieReviewDetails from './components/MovieReviewDetails'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { useSelector, useDispatch} from 'react-redux'

export const SearchMoviesContext = React.createContext()


function App() {
  const ExistingMovies = useSelector(state => state.existingMovies)
  const [ListMovies, setListMovies] = React.useState(ExistingMovies)
const dispatch = useDispatch();
  const searchForMovies = (searchQuery) => {
    return ExistingMovies.filter(movie => movie.title.toLowerCase().includes( searchQuery.toLowerCase()));
  }

  return (
   
    <SearchMoviesContext.Provider value={{ searchForMovies, ExistingMovies , setListMovies, dispatch}}>
      <Router>
        <div className="App">
          <Nav ExistingMovies={ExistingMovies}  searchForMovies={searchForMovies}  ListMovies={ListMovies} setListMovies={setListMovies} />
          <Switch>
            <Route exact path="/"  ><MovieList ListMovies={ListMovies} /></Route>
            <Route path="/addcontent" exact  ><AddMovie /></Route>
            <Route path="/reviewdetails/:title" component={MovieReviewDetails} ></Route>
          </Switch>

        </div>
      </Router>
    </SearchMoviesContext.Provider>
    
  );
}


export default App;
