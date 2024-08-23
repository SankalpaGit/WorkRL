import React from 'react';
import { useNavigate } from 'react-router-dom';

function NewsCard({ article, index }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/news/${index}`);
  };

  return (
    <div
      className="bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer"
      onClick={handleClick}
    >
      {article.urlToImage && (
        <img src={article.urlToImage} alt={article.title} className="w-full h-48 object-cover" />
      )}
      <div className="p-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-2">{article.title}</h2>
        <p className="text-gray-600 mb-4">{article.description}</p>
        <div className="flex justify-between items-center text-gray-500 text-sm">
          <span>{article.source.name}</span>
          <span>{new Date(article.publishedAt).toLocaleDateString()}</span>
        </div>
      </div>
    </div>
  );
}

export default NewsCard;
