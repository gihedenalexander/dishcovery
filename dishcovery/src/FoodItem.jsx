import { useState } from "react";

function FoodItem({ name }) {
  const [fact, setFact] = useState(null);
  const [loading, setLoading] = useState(false);

  const openAiApiKey = import.meta.env.VITE_OPENAI_API_KEY;

  const fetchFunFact = async () => {
    setLoading(true);
    setFact(null);

    try {
      const response = await fetch("http://localhost:3000/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name }),
      });

      const data = await response.json();
      setFact(data.fact || "No fact was found!");
    } catch (error) {
      console.error("Error fetching fun fact:", error);
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
