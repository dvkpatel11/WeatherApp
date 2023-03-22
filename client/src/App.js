import React, { useState } from 'react';
import './styles/App.css';
import SearchForm from './components/SearchForm';
import WeatherCard from './components/WeatherCard';

function App() {
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSearch = async (city) => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(`/api/weather/${city}`);
      const data = await response.json();

      if (response.ok) {
        setWeatherData(data);
      } else {
        setError(data.message);
      }
    } catch (error) {
      console.error(error);
      setError('An error occurred while fetching weather data.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="App">
      <SearchForm onSearch={handleSearch} />
      {loading && <p>Loading weather data...</p>}
      {error && <p>{error}</p>}
      {weatherData && <WeatherCard data={weatherData} />}
    </div>
  );
}

export default App;
