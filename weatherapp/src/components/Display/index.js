import { useEffect, useState } from "react";

//const API_KEY = 'ffc9d5a9b44b42e88249b54818508ef8';

function WeatherDisplay({ city_name }) {
  const [weather, setWeather] = useState({});

  useEffect(() => {
    async function getWeather() {
      const response = await fetch(
        `http://api.weatherbit.io/v2.0/current?city=${city_name}&key=ffc9d5a9b44b42e88249b54818508ef8`
      );
      const weatherData = await response.json();
      setWeather(weatherData.data[0]);
    }
    getWeather();
  }, []);

  return (
    <div>
      <h1>{weather.city_name}</h1>
      <h2>{weather.temp} °c </h2>
      <div>
        <p>Clouds: {weather.c} </p>
        <p>Humidity: {weather.rh}</p>
        <p>Wind Speed: {weather.wind_spd}</p>
        <p>UV: {weather.uv}</p>
      </div>
      <p>Discription {weather.weather[0]}</p>
    </div>
  );
}

export default WeatherDisplay;
