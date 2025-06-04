import { useState } from "react";

function FoodItem({ name, image }) {
  const [fact, setFact] = useState(null);
  const [loading, setLoading] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const imageUrl = image ? `https://spoonacular.com/cdn/ingredients_250x250/${image}` : null;

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
  };

  return (
    <li className="list-group-item">
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "150px 120px 1fr auto",
          alignItems: "center",
          columnGap: "1rem",
        }}
      >
        <strong>{name}</strong>
        
        <div style={{ display: "flex", justifyContent: "center" }}>
          {imageUrl && (
            <img
              src={imageUrl}
              alt={name}
              style={{
                width: "100px",
                height: "75px",
                objectFit: "cover",
                borderRadius: "8px",
              }}
            />
          )}
        </div>

        <div></div> {/* Skapar avståndet mellan bilden och knappen */}

        <button
          className="btn btn-primary"
          onClick={fetchFunFact}
          disabled={loading}
        >
          {loading ? "Loading..." : "Show intriguing fact"}
        </button>
      </div>

      <hr style={{ margin: "0.5rem 0" }}/>

      {fact && (
        <>
          <p>
            <strong>Did you know?</strong> {fact}
          </p>
          <button 
            className="btn btn-favorite btn-success" 
            onClick={() => {
              addToFavorites();
              setShowAlert(true);
              setTimeout(() => setShowAlert(false), 4000);
            }}
          >
            Add to favorites
          </button>

          {showAlert && (
            <div
              style={{
                backgroundcolor: "#ffffff",
                border: "1px solid green",
                padding: "10px 15px",
                borderRadius: "8px",
                marginTop: "10px",
                boxShadow: "0px 2px 6px rgba(0, 0, 0, 0.1)"
              }}
            >
              ✅ An interesting fact about "{name}" has been added to your favorites!
            </div>
          )}
        </>
      )}
    </li>
  );
}

export default FoodItem;