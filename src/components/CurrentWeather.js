const CurrentWeather = ({data, transformedTemp}) => {
    return (
      <div className="current-weather">
        <h3>Current Weather</h3>
        <span>{data.timezone}</span>
        <div className="weather-icon">
          <span>{data.weather.icon}</span>
          {transformedTemp && <span className="temperature">{transformedTemp} °C</span>}
          <span>Rain and snow showers</span>
        </div>
        <span>Air-Wind-Humidity</span>
        <span>Visibility</span>
      </div>
    );
  };
  
  export default CurrentWeather;