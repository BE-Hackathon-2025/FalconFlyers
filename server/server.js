import express from "express";
import OpenAI from "openai";
import { fileURLToPath } from "url";
import path from "path";

import { configDotenv } from "dotenv";

configDotenv()
const app = express();
const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

app.use(express.json());
const __filename = fileURLToPath(import.meta.url);
console.log(import.meta.url)
const __dirname = path.dirname(__filename);
app.use(express.static(path.join(__dirname, "../frontend")));

app.post("/api/chat", async (req, res) => {
  try {
    const { messages } = req.body;

    // Use a lightweight, inexpensive chat model; adjust as you like.
    const completion = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages
    });
    const reply = completion.choices?.[0]?.message?.content ?? "";
    res.json({ reply });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "OpenAI request failed" });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`http://localhost:${PORT}`));