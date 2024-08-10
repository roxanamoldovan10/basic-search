import { createSlice } from '@reduxjs/toolkit';
import { User } from '../../components/models';
import { RootState } from '../store';

export interface UsersState {
  users: User[];
}

export const usersInitialState: UsersState = {
  users: [],
};

export const usersSlice = createSlice({
  name: 'users',
  initialState: usersInitialState,
  reducers: {
    setUsers(state, action) {
      state.users = action.payload;
    },
  },
});

export const { setUsers } = usersSlice.actions;
export const usersReducer = usersSlice.reducer;

export const selectUsers = (state: RootState) => state.users.users;
