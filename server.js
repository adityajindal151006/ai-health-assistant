import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Health check
app.get('/', (req, res) => {
  res.send('AI Health Assistant Backend is running.');
});

// Example chat endpoint (replace with real AI logic)
app.post('/api/chat', (req, res) => {
  const { message } = req.body;
  if (!message) return res.status(400).json({ error: 'Message required' });
  // Simple demo response
  let reply = "Thank you for your question. Please consult a doctor for urgent issues.";
  if (message.toLowerCase().includes('headache')) {
    reply = "I'm sorry to hear you have a headache. Stay hydrated and rest. If it persists, consult a healthcare professional.";
  }
  if (message.toLowerCase().includes('fever')) {
    reply = "A fever can be a sign of infection. Monitor your temperature and drink fluids. If it gets too high or lasts more than a couple of days, see a doctor.";
  }
  res.json({ reply });
});


// Simple demo login endpoint (replace with real user DB in production)
app.post('/api/login', (req, res) => {
  const { username, password } = req.body;
  // Demo: username 'user', password 'health123'
  if (username === 'user' && password === 'health123') {
    // In production, return a JWT or session token
    return res.json({ success: true, username });
  }
  res.status(401).json({ success: false, message: 'Invalid username or password' });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
