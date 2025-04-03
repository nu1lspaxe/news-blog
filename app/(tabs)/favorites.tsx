import React, { useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { loadFavorites } from '@/redux/slices/favoriteSlice';
import NewsList from '@/components/NewsList';
import { RootState } from '@/redux';


export default function FavoritesScreen() {
  const dispatch = useDispatch();
  const favorites = useSelector((state: RootState) => state.favorites.favorites);

  useEffect(() => {
    const loadStoredFavorites = async () => {
      try {
        const storedFavorites = await AsyncStorage.getItem('favorites');
        if (storedFavorites) {
          dispatch(loadFavorites(JSON.parse(storedFavorites)));
        }
      } catch (error) {
        console.error('Error loading favorites:', error);
      }
    };
    loadStoredFavorites();
  }, [dispatch]);

  return (
    <View style={styles.container}>
      {favorites.length > 0 ? (
        <NewsList
          articles={favorites}
          loading={false}
          loadMore={() => {}}
        />
      ) : (
        <Text style={styles.text}>
          No favorites yet. Start adding articles to your favorites!
        </Text>
      )}
    </View>
  );
}


const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  text: { textAlign: 'center', marginTop: 20 },
});