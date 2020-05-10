import { combineReducers } from 'redux';
import storeMovieReducer from './StoreMovieReducer';

const allReducers = combineReducers({
    existingMovies: storeMovieReducer,
    

})

export default allReducers;