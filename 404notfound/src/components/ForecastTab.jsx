import PropTypes from "prop-types";
function ForecastTab({ onClick, imgSrc, day, minTemp, maxTemp }) {
  return (
    <button type="button" className="forecast-item" onClick={onClick}>
      <span className="day">{day}</span>
      <img src={imgSrc} alt={day} />
      <span className="temp">
        {minTemp}°C / {maxTemp}°C
      </span>
    </button>
  );
}

ForecastTab.propTypes = {
  onClick: PropTypes.func.isRequired,
  imgSrc: PropTypes.string.isRequired,
  day: PropTypes.string.isRequired,
  minTemp: PropTypes.number.isRequired,
  maxTemp: PropTypes.number.isRequired,
};

export default ForecastTab;
