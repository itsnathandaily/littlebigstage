import { combineReducers } from 'redux';
import storeMovieReducer from './StoreMovieReducer';
import SearchReducer from './SearchReducer';

const allReducers = combineReducers({
    existingMovies: storeMovieReducer

})

export default allReducers;