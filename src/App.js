import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import axios from "axios";
import Forecast from "./components/Forecast";

function App() {
  const [data, setData] = useState({});
  const [location, setLocation] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const apiKey = "efbc42bbfeeb1f9c2487a42fe838f727";
  const iconUrl = "https://openweathermap.org/img/wn/";
  const [searchHistory, setSearchHistory] = useState([]);
  const [fiveDaysData, setFiveDaysData] = useState([]);

  const [isOn, setIsOn] = useState(false);
  const handleToggle = () => {
    setIsOn(!isOn);
  };

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
        // Tried to use process.env.REACT_APP_WEATHER_API to hide my api, but it's giving me undefined.
        axios
          .get(url)
          .then((response) => {
            setData(response.data);
            setLoading(false);
          })
          .catch((error) => {
            setError(error.message);
            setLoading(false);
          });
      },
      (error) => {
        setError(error.message);
        setLoading(false);
      }
    );
  }, []);

  const searchLocation = (event) => {
    if (event.key === "Enter") {
      axios
        .get(
          `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric`
        )
        .then((response) => {
          const weatherDataHistory = {
            location: location,
            data: response.data,
          };

          setSearchHistory((prev) => [...prev, weatherDataHistory]);
          setData(response.data);
          setLocation("");
          axios
            .get(
              `https://api.openweathermap.org/data/2.5/forecast?q=${location}&appid=${apiKey}&units=metric`
            )
            .then((response) => {
              setFiveDaysData(response.data);
            })
            .catch((error) => {
              setError(error.message);
            });
        })
        .catch((error) => {
          setError(error.message);
        });
    }
  };

  return (
    <div className={`app ${isOn ? "dark" : "light"}`}>
      <Navbar
        data={data}
        searchLocation={searchLocation}
        setLocation={setLocation}
        location={location}
        searchHistory={searchHistory}
        iconUrl={iconUrl}
        isOn={isOn}
        handleToggle={handleToggle}
      />
      {loading && <h1>Loading...</h1>}
      {error && <h1>{error}</h1>}
      {!loading && !error && (
        <>
          <Forecast
            data={data}
            iconUrl={iconUrl}
            apiKey={apiKey}
            location={location}
            fiveDaysData={fiveDaysData}
            setFiveDaysData={setFiveDaysData}
          />
        </>
      )}
    </div>
  );
}

export default App;
