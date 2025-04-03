import React from 'react';
import { FlatList } from 'react-native';
import { NewsArticle } from '../types/news';
import NewsItem from './NewsItem';
import LoadingIndicator from './LoadingIndicator';

interface NewsListProps {
  articles: NewsArticle[];
  loading: boolean;
  loadMore: () => void;
}

const NewsList: React.FC<NewsListProps> = ({ articles, loading, loadMore }) => {
  return (
    <FlatList
      data={articles}
      renderItem={({ item }) => <NewsItem article={item} />}
      keyExtractor={(item) => item.id}
      onEndReached={loadMore}
      onEndReachedThreshold={0.5}
      ListFooterComponent={loading ? <LoadingIndicator /> : null}
      initialNumToRender={10}
      maxToRenderPerBatch={10}
      windowSize={5}
    />
  );
};

export default NewsList;