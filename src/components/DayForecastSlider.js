const DayForecastSlider = ({ fiveDaysData, iconUrl }) => {
  return (
    <div className="day-forecast-slider">
      <h2>5 Day Forecast</h2>
      <section>
        {fiveDaysData.list &&
          fiveDaysData.list.map((item, i) => (
            <div key={i}>
              <p>{i === 0 ? "Now" : new Date(item.dt * 1000).getHours()}</p>
              <img
                src={`${iconUrl}${item.weather[0].icon}@2x.png`}
                alt={`weather-icon-${item.weather[0].description}`}
              />
              <p>{Math.round(item.main.temp)} °C</p>
            </div>
          ))}
      </section>
    </div>
  );
};

export default DayForecastSlider;
