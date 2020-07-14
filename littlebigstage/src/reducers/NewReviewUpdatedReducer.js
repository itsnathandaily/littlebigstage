const NewReviewUpdatedReducer = (state = null, action) => {
  switch (action.type) {
    case 'REVIEW_STATE': {
      return action.newReviewUpdated;
    }
    default:
      return state;
  }
};

export default NewReviewUpdatedReducer;
