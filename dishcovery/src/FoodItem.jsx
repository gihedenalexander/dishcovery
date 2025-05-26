import { useState } from "react";

function FoodItem({ name }) {
  const [fact, setFact] = useState(null);
  const [loading, setLoading] = useState(false);

  const openAiApiKey = import.meta.env.VITE_OPENAI_API_KEY;
  console.log(openAiApiKey);

  const fetchFunFact = async () => {
    setLoading(true);
    setFact(null);

    try {
      const response = await fetch("https://api.openai.com/v1/chat/completions", {
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
          temperature: 0.7,
        }),
      });

      const data = await response.json();
      const message = data.choices?.[0]?.message?.content;
      setFact(message || "No fact was found!");
    } catch (error) {
      console.error("Error fetching fun fact:", error);
      setFact(`Could not retrieve any intriguing fact of ${name}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <li>
      <strong>{name}</strong>
      <button onClick={fetchFunFact} disabled={loading}>
      {loading ? "Loading..." : "Show intriguing fact"}
      </button>
      {fact && <p>{fact}</p>}
    </li>
  );
}

export default FoodItem;
