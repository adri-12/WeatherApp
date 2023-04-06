import DayForecastSlider from "./DayForecastSlider";
import DaySummery from "./DaySummary";
import TodaysRecommendations from "./TodaysRecommendations";

const Forecast = () => {
  return (
    <div className="forecast-container">
      <span>10 DAY FORECAST</span>
      <DayForecastSlider />
      <DaySummery />
      <TodaysRecommendations />
    </div>
  );
};

export default Forecast;