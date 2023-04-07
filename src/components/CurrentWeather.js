const CurrentWeather = ({ data, transformedTemp, iconUrl }) => {
  // const today = data.list[0];
  return (
    <div className="current-weather">
      <h3>Current Weather</h3>
      <span>{data.timezone}</span>
      <div className="weather-icon-container">
        <img
          src={`${iconUrl}${data.weather[0].icon}@2x.png`}
          alt="weather-icon"
        />
        <div>
          {transformedTemp && (
            <span className="temperature">{transformedTemp} °C</span>
          )}
          <span>{data.weather[0].description}</span>
        </div>
      </div>
      <div className="weather-information">
        <div className="wind">
          <span>Wind</span>
          <span>{Math.round(data.wind.speed)} mph</span>
        </div>
      </div>
    </div>
  );
};

export default CurrentWeather;
