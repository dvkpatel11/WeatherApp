export function formatWeatherData(data) {
    if (!data) {
        return null;
      } else {
        console.log(data);
      }
    
    const city = data.name;
    const temperature = Math.round(data.main && data.main.temp);
    const humidity = data.main && data.main.humidity;
    const windSpeed = data.wind && data.wind.speed.toFixed(1);
    const pressure = data.main && data.main.pressure;
    const description = data.weather && data.weather[0].main.description;
    const icon = `http://openweathermap.org/img/wn/${data.weather && data.weather[0].main.icon}@2x.png`;
  
    return { city, description, icon, temperature, humidity, windSpeed, pressure };
  }
  