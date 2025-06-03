import { useState } from "react";

function FoodItem({ name }) {
  const [fact, setFact] = useState(null);
  const [loading, setLoading] = useState(false);

  const openAiApiKey = import.meta.env.VITE_OPENAI_API_KEY;

  const fetchFunFact = async () => {
    setLoading(true);
    setFact(null);

    try {
      const response = await fetch(
        "https://api.openai.com/v1/chat/completions",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${openAiApiKey}`,
          },
          body: JSON.stringify({
            model: "gpt-3.5-turbo",
            messages: [
              {
                role: "user",
                content: `Tell me a fun or historical fact about the food item "${name}". Keep it short.`,
              },
            ],
            // Styr hur kreativ botten är i sina svar - 0 är strikt, 1 är kreativ
            temperature: 0.7,
          }),
        }
      );

      const data = await response.json();
      const message = data.choices?.[0]?.message?.content; // Optional chaining (alla '?') som gör att appen inte kraschar om något steg är undefined/null
      setFact(message || "No fact was found!");
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
