import React from 'react';

function Weather({ weather }) {
  const temperature = Math.round(weather.main.temp);
  const feelsLike = Math.round(weather.main.feels_like);
  const condition = weather.weather[0].description;
  const icon = weather.weather[0].icon;

  return (
    <>
      <img
        src={`https://openweathermap.org/img/wn/${icon}.png`}
        alt="weather icon"
      />
      <p>Temperature: {temperature}°C</p>
      <p>Feels like: {feelsLike}°C</p>
      <p>Weather condition: {condition}</p>
    </>
  );
}

export default Weather;