import { useState, useEffect } from "react";
import FoodList from "./FoodList";

function DishcoveryApp() {
  const [searchTerm, setSearchTerm] = useState("");
  const [results, setResults] = useState([]);

  useEffect(() => {
    if (searchTerm.length < 2) {
      setResults([]);
      return;
    }

    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://en.wikipedia.org/w/api.php?action=query&list=search&format=json&origin=*&srsearch=${encodeURIComponent(searchTerm)}`
        );

        const data = await response.json();
        const titles = data.query.search.map((item) => item.title);
        setResults(titles);

      } catch (error) {
        console.error("Error fetching from Wikipedia: ", error);
        setResults([]);
      }
    };

    fetchData();
  }, [searchTerm]);
  
  return (
    <div className="container">
      <h1>DishCovery</h1>

      <fieldset>
        <legend>Sök efter en maträtt eller ett livsmedel</legend>
        <input
          type="text"
          placeholder="Ex: Pizza, Sushi..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </fieldset>

      <hr></hr>
      <h2>Livsmedel</h2>
      <FoodList results={results} searchTerm={searchTerm}/>
      
    </div>
  );
}

export default DishcoveryApp
