import React, { useState, useEffect } from 'react';
import { CSSTransition } from 'react-transition-group';
import WeatherCard from '../WeatherCard/WeatherCard';
import SearchBar from '../SearchBar/SearchBar';
import { getWeatherImage } from '../../api/unsplashAPI';
import getRandomNaturalBeautyPhoto from '../../utils/unsplash';
import { formatWeatherData } from '../../utils/formatWeatherData';
import './App.css';

function App() {
  const [weatherData, setWeatherData] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');
  const [backgroundImage, setBackgroundImage] = useState(null);
  const [inProp, setInProp] = useState(false);

  useEffect(() => {
    const fetchBackgroundImage = async () => {
      if (weatherData && weatherData.weather[0].main) {
        const query = getQuery(weatherData.weather[0].main);
        const imageUrl = await getWeatherImage(query);
        setBackgroundImage(imageUrl);
        setInProp(true);
      } else {
        const imageUrl = await getRandomNaturalBeautyPhoto();
        setBackgroundImage(imageUrl);
        setInProp(true);
      }
    };
    fetchBackgroundImage();
  }, [weatherData]);

  const getQuery = (weatherCondition) => {
    switch (weatherCondition) {
      case 'Clear':
        return 'clear sky';
      case 'Clouds':
        return 'cloudy sky';
      case 'Rain':
        return 'rain';
      case 'Snow':
        return 'snow';
      case 'Thunderstorm':
        return 'thunderstorm';
      default:
        return 'weather';
    }
  };

  return (
    <div className="App" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <CSSTransition in={inProp} timeout={1000} classNames="bg-transition" onExited={() => setInProp(false)}>
        <div className="background-overlay"></div>
      </CSSTransition>
      <div className="container">
        <SearchBar setWeatherData={setWeatherData} setErrorMessage={setErrorMessage} />
        {weatherData && <WeatherCard data={formatWeatherData(weatherData)} />}
        {errorMessage && <div className="error-message">{errorMessage}</div>}
      </div>
    </div>
  );
}

export default App;
