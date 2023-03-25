import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';
import { formatWeatherData } from '../../utils/formatWeatherData';
import './WeatherCard.css';

function WeatherCard({ weatherData }) {
  
  if (!weatherData) {
    return (
        <Typography variant="h6" component="div" gutterBottom>
        Invalid city name
        </Typography>
    );  
  }

  const { city, description, icon, temperature, humidity, windSpeed, pressure } = formatWeatherData(weatherData);

  return (
    <Card className="weather-card">
      <CardContent>
        <Typography variant="h4" component="div" gutterBottom>
          {city}
        </Typography>
        <Typography variant="h6" component="div" gutterBottom>
          {description}
        </Typography>
        <img src={icon} alt={description} />
        <Typography variant="h2" component="div" gutterBottom>
          {temperature}°C
        </Typography>
        <Typography variant="body1" component="div" gutterBottom>
          Humidity: {humidity}%
        </Typography>
        <Typography variant="body1" component="div" gutterBottom>
          Wind Speed: {windSpeed} m/s
        </Typography>
        <Typography variant="body1" component="div">
          Pressure: {pressure} hPa
        </Typography>
      </CardContent>
    </Card>
  );
}

export default WeatherCard;
