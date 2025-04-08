import express from 'express';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';
import axios from 'axios'; // Use Axios for HTTP requests to Gemini API

dotenv.config();

const app = express();
const __dirname = path.dirname(fileURLToPath(import.meta.url));

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

app.post('/roast', async (req, res) => {
  const { input, language, roastLevel, humorLevel, responseLength } = req.body;

  try {
    const response = await axios.post(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${process.env.GEMINI_API_KEY}`,
      {
        system_instruction: {
          parts: [{
            text: `Roast this person with a roast level of ${roastLevel}, humor level of ${humorLevel}, and response length of ${responseLength} characters in the language ${language}.`
          }]
        },
        contents: [{ role: "user", parts: [{ text: input }] }],
        safetySettings: [
          {
            category: "HARM_CATEGORY_DANGEROUS_CONTENT",
            threshold: "BLOCK_ONLY_HIGH"
          }
        ],
        generationConfig: {
          stopSequences: ["Title"],
          temperature: 1.0,
          maxOutputTokens: Math.ceil(responseLength / 4), // Approximate token count
          topP: 0.8,
          topK: 10
        }
      },
      {
        headers: {
          'Content-Type': 'application/json'
        }
      }
    );

    res.json({ roast: response.data.candidates[0].content.parts[0].text });
  } catch (err) {
    console.error('Gemini API error:', err.response?.data || err.message);
    res.status(500).json({ error: 'Gemini API error' });
  }
});

app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});