import { useState, useEffect } from "react";
import FoodList from "./FoodList";
import Navbar from "./Navbar";
import "./styles.css";

function DishcoveryApp() {
  const [searchTerm, setSearchTerm] = useState("");
  const [results, setResults] = useState([]);
  const spoonacularApiKey = import.meta.env.VITE_SPOONACULAR_API_KEY;

  useEffect(() => {
    if (searchTerm.length < 2) {
      setResults([]);
      return;
    }

    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://api.spoonacular.com/food/ingredients/search?query=${encodeURIComponent(
            searchTerm
          )}&apiKey=${spoonacularApiKey}`
        );

        const data = await response.json();

        const results = Array.isArray(data.results) ? data.results : [];
        setResults(
          results.map((item) => ({
            id: item.id,
            name: item.name,
            image: `https://spoonacular.com/cdn/ingredients_250x250/${item.image}`,
          }))
        );
      } catch (error) {
        console.error("Error fetching from Spoonacular: ", error);
        setResults([]);
      }
    };

    fetchData();
  }, [searchTerm]);

  return (
    <>
      <Navbar />
      <div className="container">
        <h1>DishCovery</h1>

        <fieldset>
          <legend>Search for a dish, food or ingredient</legend>
          <input
            type="text"
            placeholder="Ex: Pizza, Sushi..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </fieldset>

        <hr></hr>
        <h2>Foods</h2>
        <FoodList results={results} searchTerm={searchTerm} />
      </div>
    </>
  );
}

export default DishcoveryApp;
