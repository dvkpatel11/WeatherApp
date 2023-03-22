const axios = require('axios');

const API_KEY = 'YOUR_API_KEY'; // Replace with your OpenWeatherMap API key

exports.getWeatherByCity = async (req, res) => {
  try {
    const { city } = req.params;
    const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`);
    res.json(response.data);
  } catch (error) {
    console.error(error);
    if (error.response) {
      res.status(error.response.status).json({ message: error.response.statusText });
    } else {
      res.status(500).json({ message: 'An error occurred while fetching weather data.' });
    }
  }
};
