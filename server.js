const express = require('express');
const cors = require('cors');
const fetch = require('node-fetch');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Store conversation history (in memory - will reset when server restarts)
const conversations = new Map();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static('.')); // Serve static files from current directory

// Chat API endpoint
app.post('/api/chat', async (req, res) => {
  try {
    const { message, lang, sessionId = 'default' } = req.body;

    if (!message) {
      return res.status(400).json({ error: 'Message is required' });
    }

    // Get or create conversation history for this session
    if (!conversations.has(sessionId)) {
      conversations.set(sessionId, []);
    }
    const conversation = conversations.get(sessionId);

    // Add user message to conversation
    conversation.push({ role: 'user', content: message });

    // Handle specific case for solidarity
    if (message.toLowerCase().includes('free palestine')) {
      const response = lang === 'bn' 
        ? "ফ্রি প্যালেস্টাইন! 🕊️ আমি শান্তি এবং সকল মানুষের মানবাধিকারের পক্ষে। বিশ্বে শান্তি প্রতিষ্ঠা করা আমাদের সকলের দায়িত্ব।"
        : "Free Palestine! 🕊️ I stand for peace and human rights for all people. Building peace in the world is our collective responsibility.";
      
      // Add bot response to conversation
      conversation.push({ role: 'assistant', content: response });
      
      return res.json({ reply: response });
    }

    // Set system prompt based on language
    const systemPrompt = lang === 'bn' 
      ? "You are Shobdo Kotha, a helpful AI assistant. Respond in Bengali (বাংলা) unless the user asks for English. Keep responses concise and friendly. When someone says 'free palestine', respond with solidarity and mention that you support peace and human rights for all people."
      : "You are Shobdo Kotha, a helpful AI assistant. Respond in English unless the user asks for Bengali. Keep responses concise and friendly. When someone says 'free palestine', respond with solidarity and mention that you support peace and human rights for all people.";

    const response = await fetch("https://api.deepseek.com/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer sk-f65c83248c664f22abffd3e8ee4946cc",
      },
      body: JSON.stringify({
        model: "deepseek-chat",
        messages: [
          { role: "system", content: systemPrompt },
          ...conversation.slice(-10) // Include last 10 messages for context
        ],
        max_tokens: 500,
        temperature: 0.7,
      }),
    });

    if (!response.ok) {
      const errorData = await response.text();
      console.error('DeepSeek API error:', errorData);
      return res.status(response.status).json({ 
        error: 'DeepSeek API error', 
        details: errorData 
      });
    }

    const data = await response.json();

    if (data.error) {
      return res.status(400).json({ 
        error: data.error.message || 'API error occurred' 
      });
    }

    // Extract the reply from the response
    const reply = data.choices?.[0]?.message?.content || 'No response received';

    // Add bot response to conversation history
    conversation.push({ role: 'assistant', content: reply });

    res.json({ reply });

  } catch (error) {
    console.error('Chat API error:', error);
    res.status(500).json({ 
      error: 'Internal server error', 
      details: error.message 
    });
  }
});

// Serve the main page
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Shobdo Kotha server running on http://localhost:${PORT}`);
  console.log(`💬 Chat API available at http://localhost:${PORT}/api/chat`);
});
