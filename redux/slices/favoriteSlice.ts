import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { NewsArticle } from '@/types/news';

interface FavoriteState {
  favorites: NewsArticle[];
}

const initialState: FavoriteState = {
  favorites: [],
};

const favoriteSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    addFavorite: (state, action: PayloadAction<NewsArticle>) => {
      state.favorites.push(action.payload);
      AsyncStorage.setItem('favorites', JSON.stringify(state.favorites));
    },
    removeFavorite: (state, action: PayloadAction<string>) => {
      state.favorites = state.favorites.filter((item) => item.id !== action.payload);
      AsyncStorage.setItem('favorites', JSON.stringify(state.favorites));
    },
    loadFavorites: (state, action: PayloadAction<NewsArticle[]>) => {
      state.favorites = action.payload;
    },
  },
});

export const { addFavorite, removeFavorite, loadFavorites } = favoriteSlice.actions;
export default favoriteSlice.reducer;