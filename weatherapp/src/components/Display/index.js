import { useEffect, useState } from "react";

function WeatherDisplay({ cityName }) {
  const [weatherNow, setWeatherNow] = useState({});

  useEffect(() => {
    async function getWeather({cityName}) {
      const response = await fetch(
        `http://api.weatherbit.io/v2.0/current?city=${cityName}&key=ffc9d5a9b44b42e88249b54818508ef8`
      );
      const weatherData = await response.json();
      setWeatherNow(weatherData.data[0]);
    }
    getWeather();
  }, [cityName]);

  // Add an if statement to check cloud cover
  let cloudCover = weatherNow.clouds;
  if (weatherNow.clouds < 50) {
    cloudCover = "Cloudy";
  } else {
    cloudCover = "Clear";
  }

  return (
    <div>
      <h1>
        {weatherNow.city_name}, {weatherNow.country_code}
      </h1>
      <h2>{Math.floor(weatherNow.temp)} °C </h2>
      <h3>Chance of rain: {Math.floor(weatherNow.precip)} %</h3>
      <div>
        <p>Clouds: {cloudCover}</p>
        <p>Humidity: {weatherNow.rh} %</p>
        {/* {<p>Wind Speed: {weatherNow.wind_spd.toFixed(1)} km/h</p>} */}
        <p>UV index: {weatherNow.uv}</p>
      </div>
    </div>
  );
}

export default WeatherDisplay;
