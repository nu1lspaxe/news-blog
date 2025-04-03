import { useState, useEffect } from 'react';
import axios from 'axios';
import { Configs } from '@/constants/config';
import { NewsArticle } from '@/types/news';

export const useNews = () => {
  const [articles, setArticles] = useState<NewsArticle[]>([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);

  const fetchNews = async (pageNum: number) => {
    setLoading(true);
    try {
      const response = await axios.get(`${Configs.NEWS_URL}`, {
        params: {
          q: Configs.NEWS_QUERY,
          page: pageNum,
          pageSize: Configs.NEWS_PAGE_SIZE,
          apiKey: Configs.NEWS_API,
        },
      });
      const newArticles = response.data.articles.map((item: any) => ({
        id: item.url,
        title: item.title,
        description: item.description,
        urlToImage: item.urlToImage,
        author: item.author,
        publishedAt: item.publishedAt,
        content: item.content,
      }));
      setArticles((prev) => [...prev, ...newArticles]);
      setHasMore(newArticles.length === Configs.NEWS_PAGE_SIZE);
    } catch (error) {
      console.error('Error fetching news:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchNews(page);
  }, [page]);

  const loadMoreArticles = () => {
    if (!loading && hasMore) {
        setPage((prev) => prev + 1);
    }
  };

  return { articles, loading, loadMoreArticles };
};