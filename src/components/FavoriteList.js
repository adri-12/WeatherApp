const FavoriteList = ({ favorites, iconUrl }) => {
  return (
    <div className="favorite-list">
      <h2>Favorite Locations</h2>
      <div className="favorite-items-container">
        {favorites.map((location, index) => (
          <div key={index}>
            <div>
              <img src={`${iconUrl}${location.icon}@2x.png`} />
            </div>
            <span>{location.name}</span>
            <span>{Math.round(location.temp)} °C</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FavoriteList;
