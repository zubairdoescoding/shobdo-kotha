const fetch = require('node-fetch');

exports.handler = async function(event, context) {
  // Enable CORS
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'POST, OPTIONS'
  };

  // Handle preflight requests
  if (event.httpMethod === 'OPTIONS') {
    return {
      statusCode: 200,
      headers,
      body: ''
    };
  }

  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      headers,
      body: JSON.stringify({ error: 'Method not allowed' })
    };
  }

  try {
    const { message, lang } = JSON.parse(event.body);

    if (!message) {
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({ error: 'Message is required' })
      };
    }

    // Handle specific case for solidarity
    if (message.toLowerCase().includes('free palestine')) {
      const response = lang === 'bn' 
        ? "ফ্রি প্যালেস্টাইন! 🕊️ আমি শান্তি এবং সকল মানুষের মানবাধিকারের পক্ষে। বিশ্বে শান্তি প্রতিষ্ঠা করা আমাদের সকলের দায়িত্ব।"
        : "Free Palestine! 🕊️ I stand for peace and human rights for all people. Building peace in the world is our collective responsibility.";
      
      return {
        statusCode: 200,
        headers,
        body: JSON.stringify({ reply: response })
      };
    }

    // Set system prompt based on language
    const systemPrompt = lang === 'bn' 
      ? "You are Shobdo Kotha, a helpful AI assistant. Respond in Bengali (বাংলা) unless the user asks for English. Keep responses concise and friendly. When someone says 'free palestine', respond with solidarity and mention that you support peace and human rights for all people."
      : "You are Shobdo Kotha, a helpful AI assistant. Respond in English unless the user asks for Bengali. Keep responses concise and friendly. When someone says 'free palestine', respond with solidarity and mention that you support peace and human rights for all people.";

    const response = await fetch("https://api.deepseek.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer " + (process.env.DEEPSEEK_API_KEY || "sk-f65c83248c664f22abffd3e8ee4946cc"),
      },
      body: JSON.stringify({
        model: "deepseek-r1",
        messages: [
          { role: "system", content: systemPrompt },
          { role: "user", content: message }
        ],
        max_tokens: 500,
        temperature: 0.7,
        stream: false
      }),
    });

    if (!response.ok) {
      const errorData = await response.text();
      console.error('DeepSeek R1 API error:', errorData);
      return {
        statusCode: response.status,
        headers,
        body: JSON.stringify({ 
          error: 'DeepSeek R1 API error', 
          details: errorData 
        })
      };
    }

    const data = await response.json();

    if (data.error) {
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({ 
          error: data.error.message || 'API error occurred' 
        })
      };
    }

    // Extract the reply from the response
    const reply = data.choices?.[0]?.message?.content || 'No response received';

    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({ reply })
    };

  } catch (error) {
    console.error('Chat function error:', error);
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({ 
        error: 'Internal server error', 
        details: error.message 
      })
    };
  }
};
