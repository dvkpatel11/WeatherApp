import React from 'react';

function Weather({ weatherData }) {
  return (
    <div className="weather">
      <h2 className="description">{weatherData.description}</h2>
    </div>
  );
}

export default Weather;
