import React from 'react';
import '../styles/WeatherCard.css';

function WeatherCard(props) {
  const { name, weather, main } = props.data;

  return (
    <div className="WeatherCard">
      <h2>{name}</h2>
      <div className="WeatherCard-condition">
        <img src={`https://openweathermap.org/img/w/${weather[0].icon}.png`} alt={weather[0].description} />
        <p>{weather[0].description}</p>
      </div>
      <div className="WeatherCard-temperature">
        <p>{Math.round(main.temp)}&deg;C</p>
        <p>Feels like {Math.round(main.feels_like)}&deg;C</p>
      </div>
      <div className="WeatherCard-details">
        <p>Humidity: {main.humidity}%</p>
        <p>Pressure: {main.pressure} hPa</p>
        <p>Wind: {Math.round(props.data.wind.speed * 3.6)} km/h</p>
      </div>
    </div>
  );
}

export default WeatherCard;
