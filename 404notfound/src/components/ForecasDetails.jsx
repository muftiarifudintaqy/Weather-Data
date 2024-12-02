function ForecastDetails() {
  return (
    <div className="forecast-details">
      <h2>18 Oktober 2024</h2>
      <h3>18:00</h3>
      <img src="https://openweathermap.org/img/wn/01d@2x.png" alt="" />
      <div className="item">
        <span className="label">Temperature</span>
        <span className="value">24°C</span>
      </div>
      <div className="item">
        <span className="label">Weather Description</span>
        <span className="value">Cloudy</span>
      </div>
      <div className="item">
        <span className="label">Humidity</span>
        <span className="value">60%</span>
      </div>
      <div className="item">
        <span className="label">Wind Speed</span>
        <span className="value">10 km/h</span>
      </div>
      <div className="item">
        <span className="label">Wind Direction</span>
        <span className="value">East to West</span>
      </div>
      <div className="item">
        <span className="label">Cloud Coverage</span>
        <span className="value">48%</span>
      </div>
      <div className="item">
        <span className="label">Vision</span>
        <span className="value">5 km</span>
      </div>
    </div>
  );
}

export default ForecastDetails;
