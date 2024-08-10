import { combineReducers } from 'redux';
import { searchReducer } from './search/search.slice';
import { usersReducer } from './users/users.slice';

export const rootReducer = combineReducers({
  search: searchReducer,
  users: usersReducer,
});
