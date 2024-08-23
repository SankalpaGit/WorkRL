import React, { useState, useEffect } from 'react';
import Loader from './Loader';
import NewsCard from './NewsCard';

function NewsList() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [visible, setVisible] = useState(9);

  const apiKey = '58f3c948d6064b4ebd9f81157145bbcc';
  const apiUrl = `https://newsapi.org/v2/everything?q=tesla&from=2024-07-23&sortBy=publishedAt&apiKey=${apiKey}`;

  useEffect(() => {
    const fetchNews = async () => {
      const response = await fetch(apiUrl);
      const data = await response.json();
      setArticles(data.articles);
      setLoading(false);
    };

    fetchNews();
  }, []);

  const loadMore = () => {
    setVisible((prevVisible) => prevVisible + 9);
  };

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {articles.slice(0, visible).map((article, index) => (
          <NewsCard key={index} article={article} index={index} />
        ))}
      </div>
      {visible < articles.length && (
        <div className="flex justify-center mt-8">
          <button onClick={loadMore} className="bg-blue-500 text-white px-6 py-2 rounded-md">
            Load More
          </button>
        </div>
      )}
    </div>
  );
}

export default NewsList;
