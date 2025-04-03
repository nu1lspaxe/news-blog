import { NewsArticle } from '@/types/news';
import { router } from 'expo-router';
import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

const NewsItem: React.FC<{ 
    article: NewsArticle 
}> = ({ article }) => {

  const handleOpen = () => {
    router.push({pathname: '/news/detail', params: article });
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => handleOpen()}>
        <Image source={{ uri: article.urlToImage }} style={styles.thumbnail} />
        <View>
          <Text style={styles.title}>{article.title}</Text>
          <Text style={styles.description}>{article.description}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#eee',
        backgroundColor: '#fff',
    },
    thumbnail: {
        width: 100,
        height: 100,
        borderRadius: 8,
        marginRight: 10,
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 4,
    },
    description: {
        fontSize: 14,
        color: '#666',
        marginBottom: 6,
    },
    article_overlay: {
        flex: 1, 
        justifyContent: 'center', 
        alignItems: 'center', 
        backgroundColor: 'rgba(0,0,0,0.5)'
    },
    article_container: {
        backgroundColor: 'white', 
        padding: 20, 
        borderRadius: 10, 
        width: '90%', 
        maxHeight: '80%'
    },
    article_content: {
        marginVertical: 10,
    },
    image: { 
        width: '100%', 
        height: 200 
    }
})

export default NewsItem;