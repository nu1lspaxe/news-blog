import NewsList from '@/components/NewsList';
import { useNews } from '@/hooks/useNews';
import React from 'react';
import { View, StyleSheet } from 'react-native';

export default function HomeScreen() {
  const { articles, loading, loadMoreArticles } = useNews();

  return (
    <View style={styles.container}>
      <NewsList articles={articles} loading={loading} loadMore={loadMoreArticles} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
});
