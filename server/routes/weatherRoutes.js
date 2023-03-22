const express = require('express');
const axios = require('axios');
const router = express.Router();

require('dotenv').config(); // load environment variables from .env file

router.get('/:city', async (req, res) => {
  try {
    const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${req.params.city}&units=metric&appid=${process.env.OPENWEATHER_API_KEY}`);

    const weatherData = {
      temp: response.data.main.temp,
      feelsLike: response.data.main.feels_like,
      description: response.data.weather[0].description,
      icon: response.data.weather[0].icon
    };

    res.json(weatherData);
  } catch (error) {
    console.error(error);
    res.status(404).json({ error: 'Invalid city name.' });
  }
});

module.exports = router;