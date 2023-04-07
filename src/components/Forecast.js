import DaySummery from "./DaySummery";
import DayForecastSlider from "./DayForecastSlider";
import TodaysRecommendation from "./TodaysRecommendation";

const Forecast = ({ data }) => {
  return (
    <div className="forecast-container">
      <span>10 DAY FORECAST</span>
      <DayForecastSlider />
      <DaySummery />
      <TodaysRecommendation />
    </div>
  );
};

export default Forecast;
