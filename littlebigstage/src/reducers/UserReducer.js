const UserReducer = (
  state = {
    username: null,
    token: null,
  },
  action
) => {
  switch (action.type) {
    case 'LOGGED_IN': {
      return action.usernameAndToken;
    }
    case 'LOGGED_OFF': {
      return {
        username: null,
        token: null,
      };
    }
    default:
      return state;
  }
};

export default UserReducer;
