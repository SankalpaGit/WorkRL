import React, { useState, useEffect } from 'react';
import { WiSunrise, WiSunset, WiThermometer, WiCloud, WiHumidity, WiRaindrop, WiStrongWind } from 'react-icons/wi';

function Home() {
  const [nepalWeather, setNepalWeather] = useState([]);
  const apiKey = 'c7aa5397284dcf329d86a526444ff5a2';

  const citiesInNepal = [
    { name: "Kathmandu", lat: 27.7172, lon: 85.3240 },
    { name: "Pokhara", lat: 28.2096, lon: 83.9856 },
    { name: "Lalitpur", lat: 27.6667, lon: 85.3333 },
    { name: "Biratnagar", lat: 26.4525, lon: 87.2718 },
    { name: "Janakpur", lat: 26.7288, lon: 85.9243 },
    { name: "Bhaktapur", lat: 27.6710, lon: 85.4298 }
  ];

  useEffect(() => {
    const fetchWeatherForAllCities = async () => {
      const weatherData = await Promise.all(
        citiesInNepal.map(async (city) => {
          const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${city.lat}&lon=${city.lon}&appid=${apiKey}&units=metric`;
          const response = await fetch(apiUrl);
          const data = await response.json();
          return { ...data, cityName: city.name };
        })
      );
      setNepalWeather(weatherData);
    };

    fetchWeatherForAllCities();
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 flex flex-col items-center justify-center p-4">
      <h1 className="text-4xl font-extrabold text-white mb-10">Weather Of Some Nepal's Cities</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl">
        {nepalWeather.map((weather, index) => (
          <div key={index} className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-2xl p-6 shadow-2xl">
            <h2 className="text-2xl font-semibold text-white mb-4">{weather.cityName}</h2>
            <div className="flex items-center mb-4">
              <WiCloud size={40} className="text-blue-300 mr-2" />
              <p className="text-xl text-gray-300 capitalize">{weather.weather[0].description}</p>
            </div>
            <div className="flex items-center mb-4">
              <WiThermometer size={40} className="text-red-500 mr-2" />
              <p className="text-3xl font-bold text-white">{weather.main.temp}°C</p>
            </div>
            <div className="flex items-center mb-4">
              <WiHumidity size={30} className="text-blue-500 mr-2" />
              <p className="text-lg text-gray-300">Humidity: {weather.main.humidity}%</p>
            </div>
            <div className="flex items-center mb-4">
              <WiStrongWind size={30} className="text-green-500 mr-2" />
              <p className="text-lg text-gray-300">Wind: {weather.wind.speed} m/s</p>
            </div>
            {weather.rain && (
              <div className="flex items-center mb-4">
                <WiRaindrop size={30} className="text-blue-400 mr-2" />
                <p className="text-lg text-gray-300">Rain: {weather.rain['1h']} mm</p>
              </div>
            )}
            <div className="flex justify-between">
              <div className="flex items-center">
                <WiSunrise size={30} className="text-orange-400 mr-2" />
                <p className="text-sm text-gray-400">Sunrise: {new Date(weather.sys.sunrise * 1000).toLocaleTimeString()}</p>
              </div>
              <div className="flex items-center">
                <WiSunset size={30} className="text-pink-400 mr-2" />
                <p className="text-sm text-gray-400">Sunset: {new Date(weather.sys.sunset * 1000).toLocaleTimeString()}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
