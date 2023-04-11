import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faSun,
  faMoon,
  faToggleOff,
  faToggleOn,
} from "@fortawesome/free-solid-svg-icons";

const Navbar = ({
  location,
  searchLocation,
  setLocation,
  searchHistory,
  iconUrl,
  isOn,
  handleToggle,
}) => {
  return (
    <nav>
      <div className="navbar-container">
        <div className="left-container">
          <div className="search">
            <input
              placeholder="Search for location"
              type="text"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              onKeyPress={searchLocation}
            />
            <FontAwesomeIcon icon={faMagnifyingGlass} className="search-icon" />
          </div>
          <div className="history-slider">
            {searchHistory.map((item, index) => (
              <div key={index}>
                {item.location}
                <img
                  src={`${iconUrl}${item.data.weather[0].icon}@2x.png`}
                  alt={`weather-icon-${item.data.weather[0].description}`}
                />
                <span>{Math.round(item.data.main.temp)}°</span>
              </div>
            ))}
          </div>
        </div>
        <div className="right-container">
          <div className="light-dark-switch">
            <FontAwesomeIcon icon={faSun} />
            <FontAwesomeIcon
              icon={isOn ? faToggleOn : faToggleOff}
              onClick={handleToggle}
            />
            <FontAwesomeIcon icon={faMoon} />
          </div>
          <select name="temperature">
            <option value="C">°C</option>
            <option value="F">°F</option>
          </select>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
