import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Home from './pages/Home';
import NewsDetails from './pages/NewsDetails';

function App() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchNews = async () => {
      const apiKey = '58f3c948d6064b4ebd9f81157145bbcc';
      const apiUrl = `https://newsapi.org/v2/everything?q=tesla&from=2024-07-23&sortBy=publishedAt&apiKey=${apiKey}`;
      const response = await fetch(apiUrl);
      const data = await response.json();
      setArticles(data.articles);
    };

    fetchNews();
  }, []);

  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home articles={articles} />} />
        <Route path="/news/:id" element={<NewsDetails articles={articles} />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
