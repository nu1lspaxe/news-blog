import React from 'react';
import { Text, Image, ScrollView, Button, StyleSheet } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { NewsArticle } from '@/types/news';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { RootState } from '@/redux';
import { addFavorite, removeFavorite } from '@/redux/slices/favoriteSlice';

const NewsDetailScreen = () => {
  const router = useRouter();
  
  const article = useLocalSearchParams<NewsArticle>();
  if (!article) {
    console.error('No article found in params');
    return <Text>No article found</Text>;
  }

  const dispatch = useDispatch();
  const favorites = useSelector((state: RootState) => state.favorites.favorites);
  const isFavorite = favorites.some((fav) => fav.id === article.id);

  const toggleFavorite = () => {
    if (isFavorite) {
      dispatch(removeFavorite(article.id));
    } else {
      dispatch(addFavorite(article));
    }
  };

  return (
    <ScrollView style={styles.container}>
      <Image source={{ uri: article.urlToImage }} style={styles.image} />
      <Text style={styles.title}>{article.title}</Text>
      <Text>Author: {article.author || 'Unknown'}</Text>
      <Text>Published at: {new Date(article.publishedAt).toLocaleString()}</Text>
      <Text style={styles.content}>{article.content}</Text>

      <Button
        title={isFavorite ? 'Remove from Favorites' : 'Add to Favorites'}
        onPress={toggleFavorite}
      />
      <Button title="Go Back" onPress={() => router.back()} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  image: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  content: {
    fontSize: 16,
    marginTop: 10,
  },
});

export default NewsDetailScreen;
