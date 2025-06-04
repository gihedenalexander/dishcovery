import { useState, useEffect } from "react";

function Favorites() {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
    setFavorites(storedFavorites);
  }, []);

  const removeFavorite = (fave) => {
    const updated = [...favorites];
    updated.splice(fave, 1);
    localStorage.setItem("favorites", JSON.stringify(updated));
    setFavorites(updated);
  };

  const clearFavorites = () => {
    localStorage.removeItem("favorites");
    setFavorites([]);
    alert("All your favorites have been cleared!");
  };

  return (
    <div className="container">
      <h1>Your Favorite Food Facts</h1>
      <br></br>
  
      {favorites.length == 0 && <p>No favorites have been saved yet.</p>}
  
      {favorites.length > 0 && ( 
      <>
          <ul className="list-group">
            {favorites.map((item, fave) => (
              <li key={fave} className="list-group-item d-flex justify-content-between">
                <div className="flex-grow-1 d-flex align-items-center">
                  <strong>{item.name}</strong>: {item.fact}
                </div>
                <button
                  className="btn btn-danger"
                  onClick={() => removeFavorite(fave)}
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>

          <br></br>
  
          <button className="btn btn-warning" onClick={clearFavorites}>
            Clear all favorites
          </button>
        </>
      )}
    </div>
  );
}

export default Favorites;