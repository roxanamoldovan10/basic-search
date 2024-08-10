import { configureStore } from '@reduxjs/toolkit';
import { rootReducer } from './root-reducers';
import logger from 'redux-logger';

const middleWares = [process.env.NODE_ENV === 'development' && logger].filter(
  Boolean
);

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      // serializableCheck: false,
    }).concat(middleWares),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
