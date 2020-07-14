const SelectedMovieReducer = (state = null, action) => {
  switch (action.type) {
    case 'SELECTED_MOVIE': {
      return action.movie;
    }

    case 'UPDATESELECTEDMOVIE': {
      // const index = state.findIndex(movie => movie.id === action.id)
      state.reviews.unshift({
        Date: Date.now(),
        rating: action.rating,
        why: action.why,
        email: action.email,
      });
      return state;
    }

    default:
      return state;
  }
};

export default SelectedMovieReducer;
