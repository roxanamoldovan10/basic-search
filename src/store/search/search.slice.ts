import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store';
import { createSelector } from 'reselect';

export interface SearchState {
  searchField: string;
}

const initialState: SearchState = {
  searchField: '',
};

export const searchSlice = createSlice({
  name: 'search',
  initialState: initialState,
  reducers: {
    setSearchField(state, action) {
      state.searchField = action.payload;
    },
  },
});

export const { setSearchField } = searchSlice.actions;

export const searchReducer = searchSlice.reducer;

const selectSearchReducer = (state: RootState) => {
  return state.search;
};

export const selectSearchField = createSelector(
  [selectSearchReducer],
  (searchSlice) => {
    return searchSlice.searchField;
  }
);
