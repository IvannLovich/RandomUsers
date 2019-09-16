const derfaultState = [];

export const allUsers = (state = derfaultState, action) => {
  switch (action.type) {
    case 'LIST_USERS':
      return action.payload;
    default:
      return state;
  }
};
