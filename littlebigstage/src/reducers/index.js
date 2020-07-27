import { combineReducers } from 'redux';
import storeMovieReducer from './StoreMovieReducer';
import UserReducer from './UserReducer';
import SelectedMovieReducer from './SelectedMovieReducer';
import NewReviewUpdatedReducer from './NewReviewUpdatedReducer';

const allReducers = combineReducers({
  user: UserReducer,
  existingMovies: storeMovieReducer,
  SelectedMovie: SelectedMovieReducer,
  NewReviewUpdated: NewReviewUpdatedReducer,
});

export default allReducers;
