import express from 'express';
import fetch from 'node-fetch';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
app.use(express.json());

const DEEPSEEK_API_KEY = process.env.DEEPSEEK_API_KEY;
const DEEPSEEK_MODEL = process.env.DEEPSEEK_MODEL || 'deepseek-chat';

if(!DEEPSEEK_API_KEY){
  console.warn('[WARN] Missing DEEPSEEK_API_KEY in environment. /api/chat will return 500.');
}

// Serve static files (fallback to Vite dev in development if desired)
app.use(express.static(__dirname));

app.post('/api/chat', async (req, res) => {
  try {
    const { messages } = req.body || {};
    if(!Array.isArray(messages) || !messages.length){
      return res.status(400).json({ error: 'messages array required' });
    }
    if(!DEEPSEEK_API_KEY){
      return res.status(500).json({ error: 'Server missing API key' });
    }

    const response = await fetch('https://api.deepseek.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${DEEPSEEK_API_KEY}`
      },
      body: JSON.stringify({
        model: DEEPSEEK_MODEL,
        messages,
        temperature: 0.6
      })
    });

    if(!response.ok){
      const text = await response.text();
      return res.status(response.status).json({ error: 'Upstream error', details: text.slice(0,1000) });
    }
    const data = await response.json();
    const answer = data.choices?.[0]?.message?.content || 'No response received.';
    res.json({ answer, raw: data });
  } catch(err){
    console.error('Chat proxy error', err);
    res.status(500).json({ error: 'Server error', details: err.message });
  }
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server listening on http://localhost:${port}`));
