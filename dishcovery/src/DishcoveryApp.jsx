import { useState, useEffect } from "react";
import FoodList from "./FoodList";
import Navbar from "./Navbar";
import Favorites from "./Favorites";
import "./styles.css";

function DishcoveryApp() {
  const [searchTerm, setSearchTerm] = useState("");
  const [results, setResults] = useState([]);
  const [currentPage, setCurrentPage] = useState("home");
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

        setResults(data.results || []);
      } catch (error) {
        console.error("Error fetching from Spoonacular: ", error);
        setResults([]);
      }
    };
    fetchData();
  }, [searchTerm]);

  const renderPages = () => {
    switch (currentPage) {
      case "favorites":
        return <Favorites />;
      case "about":
        return (
          <div className="container">
            <h1>About DishCovery</h1>
            <hr></hr>
            <h3 style={{ textAlign: "center" }}>Discover different interesting facts about your favorite foods, dishes and ingredients,
              and save them to your list of favorites!</h3>
          </div>
        );
      default:
        return (
          <div className="container">
            <h1>DishCovery</h1>
            <fieldset>
              <legend>Search for a food, dish or ingredient</legend>
              <input
                type="text"
                placeholder="Ex: Pizza, Sushi..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </fieldset>
            <hr />
            <h2>Foods</h2>
            <br></br>
            <FoodList results={results} searchTerm={searchTerm} />
            <br></br>
          </div>

        );
    }
  };
  return (
    <>
      <Navbar currentPage={currentPage} setCurrentPage={setCurrentPage} />
      {renderPages()}
    </>
  );
}

export default DishcoveryApp;