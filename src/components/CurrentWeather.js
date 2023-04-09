import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const CurrentWeather = ({ data, iconUrl }) => {
  // const today = data.list[0];
  return (
    <div className="current-weather">
      <div className="flex-col">
        <h1>
          {data.name}
          <span>, {data.sys.country}</span>
        </h1>
        <div className="high-low-temps">
          <span>H: {Math.round(data.main.temp_max)}°</span>
          <span>L: {Math.round(data.main.temp_min)}°</span>
        </div>
        <div className="weather-icon-container">
          <img
            src={`${iconUrl}${data.weather[0].icon}@2x.png`}
            alt={`weather-icon-${data.weather[0].description}`}
          />
          <div>
            <span className="temperature">{Math.round(data.main.temp)} °C</span>
            <span>{data.weather[0].description}</span>
            <span>Feels Like {Math.round(data.main.feels_like)} °C</span>
          </div>
        </div>
      </div>
      <ul>
        <li>
          <span>Wind</span>
          <span>{Math.round(data.wind.speed)} mph</span>
        </li>
        <li>
          <span>Humidity</span>
          <span>{data.main.humidity}%</span>
        </li>
      </ul>
    </div>
  );
};

export default CurrentWeather;
