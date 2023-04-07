import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const Navbar = ({ location, searchLocation, setLocation }) => {
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
            <span>Search History</span>
          </div>
        </div>
        <div className="right-container">
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
