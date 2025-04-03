import { configureStore } from '@reduxjs/toolkit';
import favoriteReducer from './slices/favoriteSlice';

export const store = configureStore({
  reducer: {
    favorites: favoriteReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;