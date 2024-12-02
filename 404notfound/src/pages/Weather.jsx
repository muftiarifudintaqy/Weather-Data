import React, { useEffect, useState } from "react";
import ForecastTab from "../components/ForecastTab";
import ForecastDetails from "../components/ForecasDetails";

function Weather() {
  const apiUrl = "https://api.bmkg.go.id/publik/prakiraan-cuaca";
  const [weather, setWeather] = useState(null);
  const [location, setLocation] = useState(null);
  const [error, setError] = useState(null);
  const [SelectedTab, setSelectedTab] = useState(null);

  useEffect(() => {
    async function fechData() {
      try {
        const response = await fetch(`${apiUrl}?adm4=32.01.05.2004`);
        const data = await response.json();
        if (!response.ok) {
          throw new Error("data.message");
        }
        setWeather(data.data[0].cuaca);
        // console.log(data.data[0].cuaca);
        setLocation(data.lokasi);
      } catch (error) {
        setError(error);
        console.log(error);
      }
    }
    fechData();
  }, []);

  function getCurrentWeahter(weatherArray) {
    const passedWeather = weatherArray.filter((item) => 
      item.datetime <= new Date().toISOString()
    );
    // console.log(passedWeather);

    if (passedWeather.length === 0) {
      return weather[0];
    }
    const currentWeather = passedWeather[passedWeather.length - 1];
    // console.log(currentWeather);
    return currentWeather;
  }

  return (
    <React.Fragment>
      {weather && (
        <section className="weather">
          <h1>Weather in Desa, Kecamatan, Kota, Provinsi</h1>
          <span>
            {Date(getCurrentWeahter(weather[0]).datetime).toLocaleString()}
          </span>
          <div className="current-weather">
            <img
              src={getCurrentWeahter(weather[0]).image}
              alt={getCurrentWeahter(weather[0]).weather_desc}
            />

            <span className="weather-desc">
              {getCurrentWeahter(weather[0]).weather_desc}
            </span>
            <strong>{getCurrentWeahter(weather[0]).t}°C </strong>
          </div>
        </section>
      )}

      <section className="forecast">
        <h2>Forecast</h2>
        <div className="forecast-container">
          <ForecastTab
            onClick={() => {}}
            imgSrc="https://openweathermap.org/img/wn/01d@2x.png"
            day="Today"
            minTemp={18}
            maxTemp={24}
          />
          <ForecastTab
            onClick={() => {}}
            imgSrc="https://openweathermap.org/img/wn/01d@2x.png"
            day="Tomorrow"
            minTemp={18}
            maxTemp={24}
          />
          <ForecastTab
            onClick={() => {}}
            imgSrc="https://openweathermap.org/img/wn/01d@2x.png"
            day="Sunday"
            minTemp={18}
            maxTemp={24}
          />
        </div>
        <div className="divider"></div>
        <div className="forecast-details-container">
          <ForecastDetails />
          <ForecastDetails />
          <ForecastDetails />
          <ForecastDetails />
          <ForecastDetails />
          <ForecastDetails />
          <ForecastDetails />
          <ForecastDetails />
          <ForecastDetails />
        </div>
      </section>
    </React.Fragment>
  );
}
export default Weather;
