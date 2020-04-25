import { combineReducers } from 'redux';
import storeMovieReducer from './StoreMovieReducer';
import UpdateMovieReducer from './UpdateReducer';

const allReducers = combineReducers({
    existingMovies: storeMovieReducer,
    

})

export default allReducers;