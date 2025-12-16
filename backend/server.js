const express = require('express');
const cors = require('cors');
const { GoogleGenerativeAI } = require('@google/generative-ai');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 3001;

// Initialize Gemini
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

app.post('/api/generate', async (req, res) => {
  try {
    const { topic } = req.body;

    if (!topic) {
      return res.status(400).json({ success: false, error: 'Topic is required' });
    }

    const prompt = `Search the web for the LATEST news and information about: ${topic}

Then create a complete content package for a tech blog with:

1. BLOG ARTICLE (800-1000 words):
   - Catchy SEO-optimized headline
   - Engaging introduction with hook
   - Break down the news with 3-4 clear sections
   - Include key details, specs, release dates, pricing, or important info
   - Natural, human-sounding writing (not robotic)
   - Conclusion with takeaway
   - Meta description for SEO (150 characters)

2. X/TWITTER THREAD (8-10 tweets):
   - Tweet 1: Eye-catching hook with the main news
   - Tweets 2-8: Break down key points (one per tweet)
   - Include relevant stats or quotes
   - Tweet 9-10: Call-to-action and engagement
   - Use emojis strategically 
   - Keep each tweet under 280 characters
   - Number each tweet (1/10, 2/10, etc.)

3. INSTAGRAM CAPTIONS:
   - Main Post Caption: Engaging, conversational (150-200 words)
   - Story Caption: Short, punchy (1-2 sentences)
   - Reel Caption: Hook-focused (2-3 sentences)
   - 30 relevant SEO hashtags (mix of popular 100k+ and niche 10k-50k hashtags)

Format with clear section headers:
=== BLOG ARTICLE ===
=== X/TWITTER THREAD ===
=== INSTAGRAM CAPTIONS ===`;

    console.log(`📝 Generating content for topic: ${topic}`);

    // Use Gemini 2.0 Flash with Google Search grounding
    const model = genAI.getGenerativeModel({ 
      model: "gemini-2.0-flash-exp",
      tools: [{
        googleSearch: {}
      }]
    });

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();

    if (text) {
      console.log('✅ Content generated successfully');
      res.json({ success: true, content: text });
    } else {
      console.log('❌ No content generated');
      res.json({ success: false, error: 'No content generated' });
    }
  } catch (error) {
    console.error('❌ Error:', error.message);
    res.status(500).json({ success: false, error: error.message });
  }
});

// Health check endpoint
app.get('/health', (req, res) => {
  res.json({ status: 'ok', message: 'Server is running' });
});

app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
  console.log(`🔑 Using Gemini API: ${process.env.GEMINI_API_KEY ? 'Key found' : 'KEY MISSING!'}`);
  console.log(`🌐 CORS enabled for all origins`);
});
