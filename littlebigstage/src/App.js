import React from 'react';
import './App.css';
import MovieList from './components/MovieList'
import Nav from './components/Nav';
import AddMovie from './components/AddMovie';
import MovieReviewDetails from './components/MovieReviewDetails'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import axios from 'axios'
import { storeMovie } from './actions';
export const SearchMoviesContext = React.createContext()


function App() {
  const ExistingMovies = useSelector(state => state.existingMovies)
  const [ListMovies, setListMovies] = React.useState(ExistingMovies)
  const dispatch = useDispatch();
  const [List, setList] = React.useState(null)

  React.useEffect(() => {
    axios.get('http://localhost:5000/movies/')
      .then(res => {
        const result = res.data.reverse();
        // setList(res.data)
        setList(result)
         // console.log('reversed result is', result)
        result.forEach(movie => {
          console.log('movie is ', movie)
          let reviewArray = [];
          movie.reviews.forEach(review => {
            let obj = {
              date: review.date,
              rating: review.rating,
              why: review.why,
              email: review.username,
            }
            reviewArray.push(obj);
          })
          // console.log('reviewArray is ', reviewArray)
          // dispatch(storeMovie([{ id: movie._id, title: movie.title, category: movie.category, image: movie.image, reviews: [{ Date: movie.reviews[0].date, rating: movie.reviews[0].rating, why: movie.reviews[0].why, email: movie.reviews[0].username }] }]))
          dispatch(storeMovie([{ id: movie._id, title: movie.title, category: movie.category, image: movie.image, reviews: reviewArray }]))
        })
      })

  }, [])



  const searchForMovies = (searchQuery) => {
    return ExistingMovies.filter(movie => movie.title.toLowerCase().includes(searchQuery.toLowerCase()));
  }

  return (

    <SearchMoviesContext.Provider value={{ searchForMovies, ExistingMovies, setListMovies, dispatch }}>
      <Router>
        <div className="App">
          <Nav ExistingMovies={ExistingMovies} searchForMovies={searchForMovies} ListMovies={ListMovies} setListMovies={setListMovies} />
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
