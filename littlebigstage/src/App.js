import React from 'react';
import './App.css';
import MovieList from './components/MovieList'
import Nav from './components/Nav';
import { MovieProvider } from './contexts/MovieContext'
import { ExistingMovieProvider } from './contexts/ExistingMovieContext';
import AddMovie from './components/AddMovie';
import MovieReviewDetails from './components/MovieReviewDetails'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

function App() {
  return (
    <MovieProvider>
      {/* <ExistingMovieProvider> */}
      <Router>
        <div className="App">
          <Nav />

          <Switch>
            <Route path="/" exact component={MovieList} />
            <Route path="/addcontent" exact component={AddMovie} />
            <Route path="/reviewdetails/:title" component={MovieReviewDetails} />
          </Switch>

        </div>
      </Router>
      {/* </ExistingMovieProvider> */}
    </MovieProvider>
  );
}

export default App;
