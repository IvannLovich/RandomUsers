import axios from 'axios';

export const showUsers = () => async dispatch => {
  const endPoint = 'https://randomuser.me/api/?seed=myseed&results=50';
  const response = await axios.get(endPoint);
  return dispatch({
    type: 'LIST_USERS',
    payload: response.data.results
  });
};
