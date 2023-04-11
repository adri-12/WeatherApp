const DayForecastSlider = ({ fiveDaysData, iconUrl }) => {
  const filteredData = fiveDaysData?.list?.filter(
    (item, index) => (index + 1) % 8 === 0 // filter every 8th item
  );
  const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  return (
    <div className="day-forecast-slider">
      <h2>5 Day Forecast</h2>
      <section>
        {filteredData &&
          filteredData.map((item, i) => {
            const date = new Date(item.dt_txt);
            const dayOfWeek = daysOfWeek[date.getDay()];
            const dayOfMonth = date.getDate();

            return (
              <div key={i}>
                <span>
                  {dayOfWeek} {dayOfMonth}
                </span>
                <img
                  src={`${iconUrl}${item.weather[0].icon}@2x.png`}
                  alt={`weather-icon-${item.weather[0].description}`}
                />
                <span>{Math.round(item.main.temp)} °C</span>
              </div>
            );
          })}
      </section>
    </div>
  );
};
export default DayForecastSlider;
