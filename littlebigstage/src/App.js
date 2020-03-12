import React from 'react';
import './App.css';
import MovieList from './components/MovieList'
import Nav from './components/Nav';
import { MovieProvider } from './contexts/MovieContext'
import AddMovie from './components/AddMovie';
import MovieReviewDetails from './components/MovieReviewDetails'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

function App() {
  return (
    <MovieProvider>
      <Router>
        <div className="App">
          <Nav />

          <Switch>
            <Route path="/addcontent" exact component={AddMovie} />
            <Route path="/" exact component={MovieList} />
            <Route path="/reviewdetails/:title" component={MovieReviewDetails} />
          </Switch>

        </div>
      </Router>
    </MovieProvider>
  );
}

export default App;
