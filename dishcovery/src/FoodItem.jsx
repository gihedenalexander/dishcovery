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

  return (
    <li className="list-group-item d-flex justify-content-between align-items-center">
        <strong>{name}</strong>  {fact && <p>{fact}</p>}
      <button
        className="btn btn-primary"
        onClick={fetchFunFact}
        disabled={loading}
      >
            {loading ? "Loading..." : "Show intriguing fact"} {" "}
      </button>
    </li>
  );
}

export default FoodItem;
