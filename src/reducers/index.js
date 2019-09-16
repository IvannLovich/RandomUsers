import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import { allUsers } from './usersReducer';

const rootReducer = combineReducers({ allUsers, routing: routerReducer });

export default rootReducer;
