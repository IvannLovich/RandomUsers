const derfaultState = {
  us: [],
};

export const allUsers = (state = derfaultState, action) => {
  switch (action.type) {
    case 'LIST_USERS':
      return Object.assign({}, state, { us: action.payload })
    default:
      return state;
  }
};
