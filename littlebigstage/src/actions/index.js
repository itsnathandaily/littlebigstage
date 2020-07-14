export const storeMovie = (newMovie) => {
  return {
    type: 'STOREMOVIE',
    newMovie,
  };
};

export const UpdateSelectedMovie = ({ id, rating, why, email })=>{
  return {
    type : 'UPDATESELECTEDMOVIE',
    id: id,
    rating: rating,
    why: why,
    email: email,
  }
}

export const updateMovie = (movie) => {
  return {
    type: 'UPDATEMOVIE',
    movie,
  };
};

export const updateReview = ({ id, rating, why, email }) => {
  return {
    type: 'UPDATE_REVIEW',
    id: id,
    rating: rating,
    why: why,
    email: email,
  };
};

export const searchMovie = (title) => {
  return {
    type: 'SEARCH',
    title: title,
  };
};

export const listMovie = () => {
  return {
    type: 'LIST',
  };
};

export const addMovie = (newMovie) => {
  return {
    type: 'ADD_MOVIE',
    newMovie,
  };
};

export const userLoggedIn = (usernameAndToken) => {
  return {
    type: 'LOGGED_IN',
    usernameAndToken,
  };
};

export const selectedMovie = (movie) => {
  return {
    type: 'SELECTED_MOVIE',
    movie,
  };
};

export const getUpdateMovie = ({ index }) => {
  return {
    type: 'GET_UPDATE_MOVIE',
    index,
  };
};

export const updateState = (state) => {
  return {
    type: 'UPDATE_STATE',
    state,
  };
};

export const reviewState = (newReviewUpdated) => {
  return {
    type: 'REVIEW_STATE',
    newReviewUpdated,
  };
};
