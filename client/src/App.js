import React, { useState } from 'react';
import Form from './components/Form';
import Card from './components/Card';
import Weather from './components/Weather';

function App() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState({});
  const [error, setError] = useState("");

  const handleSearch = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`/api/weather/${city}`);
      const data = await response.json();
      setWeather(data);
      setError("");
    } catch (error) {
      setError("Invalid city name.");
    }
  };

  return (
    <div className="container">
      <h1>Weather App</h1>
      <Form city={city} setCity={setCity} handleSearch={handleSearch} />
      {error && <p className="error">{error}</p>}
      {weather.main && (
        <Card>
          <Weather weather={weather} />
        </Card>
      )}
    </div>
  );
}

export default App;