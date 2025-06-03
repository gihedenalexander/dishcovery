import dotenv from "dotenv";
import express from "express";
import axios from "axios";
import cors from "cors";

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

const openAiApiKey = process.env.VITE_OPENAI_API_KEY;

app.post("/chat", async (req, res) => {
  const { name } = req.body;

  if (!name) {
    return res.status(400).json({ error: "Missing food item name" });
  }

  try {
    const response = await axios.post(
      "https://api.openai.com/v1/chat/completions",
      {
        model: "gpt-3.5-turbo",
        messages: [
          {
            role: "user",
            content: `Tell me a fun or historical fact about the food item "${name}". Keep it short.`,
          },
        ],
        temperature: 0.7,
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${openAiApiKey}`,
        },
      }
    );

    const message = response.data.choices?.[0]?.message?.content;
    res.json({ fact: message || "No fact was found!" });
  } catch (error) {
    console.error("OpenAI API error:", error.message);
    res.status(500).json({ error: "Failed to fetch fact from OpenAI" });
  }
});

app.listen(3000, () => console.log("Server running on port 3000"));
