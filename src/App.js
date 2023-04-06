import { useEffect, useState } from "react";
import CurrentWeather from "./components/CurrentWeather";
import Navbar from "./components/Navbar";
import axios from "axios";
import moment from "moment";

function App() {
  const [data, setData] = useState({});
  const [location, setLocation] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const apiKey = "efbc42bbfeeb1f9c2487a42fe838f727";

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
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
          setData(response.data);
          console.log(response.data);
        })
        .catch((error) => {
          setError(error.message);
        });
    }
  };

  const transformedTemp = data.main ? Math.round(data.main.temp) : null;
  const timezone = -14400; // in seconds
  const timezoneInMinutes = timezone / 60; // convert to minutes
  const currentTime = moment(timezone)
    .utcOffset(timezoneInMinutes)
    .format("h:mm A");
    console.log(data);
  return (
    <div className="App">
      <Navbar />
      {loading && <h1>Loading...</h1>}
      {error && <h1>{error}</h1>}
      {!loading && !error && (
        <>
          <CurrentWeather data={data} location={location} transformedTemp={transformedTemp} />
          <input
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            onKeyPress={searchLocation}
          />
          <h1>{data.name}</h1>
          {transformedTemp && <h1>{transformedTemp} °C</h1>}
          <h1>{data.timezone}</h1>
        </>
      )}
    </div>
  );
}

export default App;
