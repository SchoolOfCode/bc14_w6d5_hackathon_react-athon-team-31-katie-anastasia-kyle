import { useEffect, useState } from "react";
import "./style.css";
import AddToFavourites from "../AddToFavourites/index.js";

function WeatherDisplay({ city_name }, { addToFavourites }) {
  const [weatherNow, setWeatherNow] = useState({}); 

  useEffect(() => {
    async function getWeather() {
      const response = await fetch(
        `http://api.weatherbit.io/v2.0/current?city=${city_name}&key=ffc9d5a9b44b42e88249b54818508ef8`
      );
      const weatherData = await response.json();
      setWeatherNow(weatherData.data[0]);
    }
    getWeather(weatherNow);
  }, [city_name]); // The useEffect hook will run every time the city_name state changes
  // The weatherNow state is updated by setting it to the weather data from the API

  let cloudCover;
  if (weatherNow.clouds < 50) {
    cloudCover = "Sunny";
  } else {
    cloudCover = "Cloudy";
  }

  let bgColorClass;
  if (weatherNow.clouds < 50) {
    bgColorClass = "bg-sunny";
  } else {
    bgColorClass = "bg-cloudy";
  }
  //
  return (
    <div className={bgColorClass}>
      <div className="location-display">
      <h1>
        {weatherNow.city_name} {weatherNow.country_code}
      </h1>
      <AddToFavourites addToFavourites={addToFavourites} />
      </div>
      <h2>{Math.floor(weatherNow.temp)} °C </h2>
      <h3>Chance of rain: {Math.floor(weatherNow.precip)} %</h3>
      <div className="weatherStuff">
        <p>Clouds: {cloudCover}</p>
        <p>Humidity: {weatherNow.rh} %</p>
        <p>
          Wind speed: {""}
          {/* ? and : are if and else statements */}
          {weatherNow.wind_spd ? weatherNow.wind_spd.toFixed(1) : "N/A"} mp/h
        </p>
        {/* make colours turn diffent colours according to the index from "low to "Very High */}
        <p>UV index: {weatherNow.uv ? weatherNow.uv.toFixed(1) : "N/A"}</p>
      </div>
    </div>
  );
}
//
export default WeatherDisplay;
