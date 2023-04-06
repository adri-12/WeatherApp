import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

const Navbar = () => {
  return (
    <nav>
      <div className="navbar-container">
      <div className="left-container">
        <div className="search">
        <input type="text" placeholder='Search for location'/>
        <FontAwesomeIcon icon={faMagnifyingGlass} className='search-icon'/>
        </div>
      </div>
      <div className="right-container">
        <div className="favourite-slider">
        <span>City</span>
        <span>Weather icon, temperature</span>
        <span>Left Arrow</span>
        <span>Right Arrow</span>
        <span>Weather Setting c or f</span>
        </div>
      </div>
      </div>
    </nav>
  );
};

export default Navbar;