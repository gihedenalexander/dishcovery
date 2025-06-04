import { useState } from "react";

function FoodItem({ name }) {
  const [fact, setFact] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchFunFact = async () => {
    setLoading(true);
    setFact(null);

    try {
      const response = await fetch("http://localhost:5001/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name }),
      });
      const data = await response.json();
      setFact(data.fact || "No fact was found!");
    } catch (error) {
      setFact(`Could not retrieve any intriguing fact of ${name}`);
    } finally {
      setLoading(false);
    }
  };

  const addToFavorites = () => {
    const favoriteFood = JSON.parse(localStorage.getItem("favorites")) || [];
    const newFavorite = { name, fact };

      favoriteFood.push(newFavorite);
      localStorage.setItem("favorites", JSON.stringify(favoriteFood));
      console.log(`Added to favorites: ${name}`);
      alert(`"${name}" fact has been added to your favorites`);
  };

  return (
    <li className="list-group-item d-flex justify-content-between align-items-center">
      <div>
        <strong>{name}</strong>
        {fact && <p className="mt-2 mb-0">{fact}</p>}
      </div>
      <div className="d-flex gap-2">
        <button
          className="btn btn-primary"
          onClick={fetchFunFact}
          disabled={loading}
        >
          {loading ? "Loading..." : "Show intriguing fact"}
        </button>
        {fact && (
          <button className="btn btn-favorite btn-success" onClick={addToFavorites}>
            Add to favorites
          </button>
        )}
      </div>
    </li>
  );
}

export default FoodItem;