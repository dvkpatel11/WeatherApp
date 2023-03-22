import React, { useState } from 'react';
import Form from './components/Form';
import Card from './components/Card';
import Weather from './components/Weather';
import './styles/App.css';

function App() {
  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch(`/api/weather/${city}`);
      const data = await response.json();

      if (response.ok) {
        setWeatherData(data);
        setError('');
      } else {
        setWeatherData(null);
        setError(data.error);
      }
    } catch (error) {
      console.error(error);
      setWeatherData(null);
      setError('Unable to retrieve weather data.');
    }
  };

  return (
    <div className="container">
      <h1>Weather App</h1>
      <Form city={city} setCity={setCity} handleSubmit={handleSubmit} />
      {error && <p className="error">{error}</p>}
      {weatherData && <Card weatherData={weatherData} />}
      {weatherData && <Weather weatherData={weatherData} />}
    </div>
  );
}

export default App;
