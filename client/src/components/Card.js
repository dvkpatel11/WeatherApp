import React from 'react';

function Card({ weatherData }) {
  const iconUrl = `http://openweathermap.org/img/w/${weatherData.icon}.png`;

  return (
    <div className="card">
      <img src={iconUrl} alt={weatherData.description} />
      <p className="temp">{Math.round(weatherData.temp)}°C</p>
      <p className="feels-like">Feels like: {Math.round(weatherData.feelsLike)}°C</p>
    </div>
  );
}

export default Card;
