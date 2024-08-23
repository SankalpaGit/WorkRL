import React from 'react';
import { useParams } from 'react-router-dom';

function NewsDetails({ articles }) {
  const { id } = useParams();
  const article = articles[parseInt(id)];

  if (!article) {
    return <div className="text-center text-gray-700 mt-24">Article not found</div>;
  }

  return (
    <div className="container mx-auto p-8 mt-20">
      <div className="bg-white rounded-lg shadow-lg p-8 flex flex-col md:flex-row items-start gap-8">
        {/* Left Side: Image */}
        <div className="md:w-1/2 w-full">
          {article.urlToImage && (
            <img
              src={article.urlToImage}
              alt={article.title}
              className="w-full h-auto object-cover rounded-lg"
            />
          )}
        </div>

        {/* Right Side: Content */}
        <div className="md:w-1/2 w-full flex flex-col gap-6">
          <div>
            <h1 className="text-4xl font-bold text-gray-800 mb-4 leading-tight">
              {article.title}
            </h1>
            <div className="text-gray-500 text-sm">
              <span className="font-semibold">{article.source.name}</span>
              <span className="ml-4">{new Date(article.publishedAt).toLocaleDateString()}</span>
            </div>
          </div>
          <p className="text-gray-700 leading-relaxed">{article.content || article.description}</p>
          <p className="text-gray-700 leading-relaxed">
            {article.description}
            <br />
            {article.content}
          </p>
          <a
            href={article.url}
            target="_blank"
            rel="noopener noreferrer"
            className="self-start inline-block mt-4 px-6 py-2 text-white bg-blue-600 hover:bg-blue-700 rounded-lg shadow transition duration-300"
          >
            Read the full article
          </a>
        </div>
      </div>
    </div>
  );
}

export default NewsDetails;
