import React, { useState } from 'react';
import { WiSunrise, WiSunset, WiThermometer, WiCloud, WiHumidity, WiRaindrop, WiStrongWind, WiBarometer, WiDaySunny, WiFog, WiAlien } from 'react-icons/wi';

function Global() {
  const [query, setQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const apiKey = 'c7aa5397284dcf329d86a526444ff5a2';

  const fetchWeatherForCity = async (cityName) => {
    setLoading(true);
    setError('');
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`;
    try {
      const response = await fetch(apiUrl);
      const data = await response.json();
      if (data.cod === 200) {
        setSearchResults([data]);
      } else {
        setSearchResults([]);
        setError('City not found');
      }
    } catch (error) {
      setSearchResults([]);
      setError('Failed to fetch data');
    }
    setLoading(false);
  };

  const handleSearch = () => {
    if (query.trim()) {
      fetchWeatherForCity(query);
      setQuery('');
    }
  };

  const renderWeatherIcon = (main) => {
    switch (main) {
      case 'Clear':
        return <WiDaySunny size={40} className="text-yellow-500" />;
      case 'Clouds':
        return <WiCloud size={40} className="text-gray-500" />;
      case 'Rain':
        return <WiRaindrop size={40} className="text-blue-500" />;
      case 'Mist':
        return <WiFog size={40} className="text-gray-300" />;
      default:
        return <WiAlien size={40} className="text-green-500" />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-800 flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-4xl">
        <div className="flex mb-8 items-center bg-gray-700 p-4 rounded-lg shadow-lg">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="flex-1 p-2 rounded-l-lg border-none outline-none bg-gray-200 text-gray-800"
            placeholder="Search city..."
          />
          <button
            onClick={handleSearch}
            className="bg-blue-600 text-white p-2 rounded-r-lg border-none shadow-md hover:bg-blue-700 transition duration-300"
          >
            Search
          </button>
        </div>
        {loading && <p className="text-white text-lg text-center">Loading...</p>}
        {searchResults.length > 0 && (
          <div className=" w-4/12 m-auto">
            {searchResults.map((weather, index) => (
              <div key={index} className="bg-gray-900 text-white rounded-xl p-6 shadow-lg m-auto w-full">
                <h2 className="text-3xl font-bold mb-4 text-center">{weather.name}</h2>
                <div className="flex items-center justify-center mb-4">
                  {renderWeatherIcon(weather.weather[0].main)}
                  <p className="text-xl ml-3">{weather.weather[0].description}</p>
                </div>
                <div className="flex items-center justify-between mb-4">
                  <WiThermometer size={40} className="text-red-500" />
                  <p className="text-4xl font-semibold">{weather.main.temp}°C</p>
                </div>
                <div className="flex items-center justify-between mb-4">
                  <WiHumidity size={30} className="text-blue-300" />
                  <p className="text-lg">Humidity: {weather.main.humidity}%</p>
                </div>
                <div className="flex items-center justify-between mb-4">
                  <WiStrongWind size={30} className="text-green-400" />
                  <p className="text-lg">Wind: {weather.wind.speed} m/s</p>
                </div>
                {weather.main.pressure && (
                  <div className="flex items-center justify-between mb-4">
                    <WiBarometer size={30} className="text-yellow-500" />
                    <p className="text-lg">Pressure: {weather.main.pressure} hPa</p>
                  </div>
                )}
                {weather.visibility && (
                  <div className="flex items-center justify-between mb-4">
                    <WiFog size={30} className="text-gray-400" />
                    <p className="text-lg">Visibility: {weather.visibility / 1000} km</p>
                  </div>
                )}
                <div className="flex justify-between mt-4 text-sm text-gray-400">
                  <div className="flex items-center">
                    <WiSunrise size={30} className="text-orange-500 mr-2" />
                    <p>Sunrise: {new Date(weather.sys.sunrise * 1000).toLocaleTimeString()}</p>
                  </div>
                  <div className="flex items-center">
                    <WiSunset size={30} className="text-pink-500 mr-2" />
                    <p>Sunset: {new Date(weather.sys.sunset * 1000).toLocaleTimeString()}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
        {!loading && searchResults.length === 0 && query && <p className="text-white text-lg text-center mt-4">{error}</p>}
      </div>
    </div>
  );
}

export default Global;
