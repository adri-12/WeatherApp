import DaySummery from "./DaySummery";
import DayForecastSlider from "./DayForecastSlider";
import TodaysRecommendation from "./TodaysRecommendation";
import CurrentWeather from "./CurrentWeather";
import axios from "axios";
import { useEffect } from "react";

const Forecast = ({
  data,
  iconUrl,
  apiKey,
  location,
  fiveDaysData,
  setFiveDaysData,
  handleAddToFavorites,
}) => {
  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      const { latitude, longitude } = position.coords;
      const url = `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
      axios.get(url).then((response) => {
        setFiveDaysData(response.data);
      });
    });
  }, [apiKey, setFiveDaysData]);
  return (
    <div className="forecast-container">
      <CurrentWeather
        iconUrl={iconUrl}
        data={data}
        location={location}
        handleAddToFavorites={handleAddToFavorites}
      />
      <DayForecastSlider fiveDaysData={fiveDaysData} iconUrl={iconUrl} />
      <DaySummery />
      <TodaysRecommendation />
    </div>
  );
};

export default Forecast;
