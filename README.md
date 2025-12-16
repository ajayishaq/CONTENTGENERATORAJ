# 🚀 AI Tech News Blog Generator

An AI-powered tool that fetches the latest tech news using Google Gemini and automatically generates:
- 📝 SEO-optimized blog articles (800-1000 words)
- 🐦 X/Twitter threads (8-10 tweets)
- 📸 Instagram captions with 30 SEO hashtags

## ✨ Features

- 🔍 **Real-time News Fetching**: Uses Google Search grounding to get latest tech news
- 🤖 **Powered by Gemini 2.0**: Lightning-fast generation with Google's latest AI
- 📋 **One-Click Copy**: Copy any section instantly to your clipboard
- 🎨 **Beautiful UI**: Modern, responsive design
- 💰 **Free Tier**: 1,500 requests/day on Gemini's free plan
- ⚡ **Fast**: Generates complete content in 15-30 seconds

## 🔑 Get Your Gemini API Key

1. Go to: https://aistudio.google.com/app/apikey
2. Click "Create API Key"
3. Copy your key
4. Add it to `backend/.env`

**Free Tier Limits:**
- ✅ 1,500 requests per day
- ✅ 1 million tokens per minute
- ✅ No credit card required

## 🛠️ Local Setup

### 1. Clone Repository
```bash
git clone https://github.com/yourusername/ai-tech-news-generator.git
cd ai-tech-news-generator
```

### 2. Setup Backend
```bash
cd backend
npm install
```

### 3. Add Your API Key
Create a `.env` file in the `backend` folder:
```
GEMINI_API_KEY=your_actual_gemini_key_here
PORT=3001
```

### 4. Start Backend Server
```bash
npm start
```
You should see:
```
✅ Server running on http://localhost:3001
🔑 Using Gemini API: Key found
```

### 5. Start Frontend
Open a new terminal:
```bash
cd frontend
npx serve .
```

### 6. Open Browser
Go to: `http://localhost:3000`

## 📖 How to Use

1. Enter a tech topic (e.g., "iPhone 16 Pro features", "ChatGPT-5 release")
2. Click "Generate Content"
3. Wait 15-30 seconds
4. Copy blog article, Twitter thread, or Instagram captions
5. Post to your platforms!

## 🌐 Deploy to Production

### Backend (Choose One):

#### Option 1: Railway.app (Easiest)
```bash
# Install Railway CLI
npm i -g @railway/cli

# Login and deploy
railway login
cd backend
railway init
railway up

# Add environment variable in Railway dashboard:
# GEMINI_API_KEY = your_key
```

#### Option 2: Render.com
1. Connect GitHub repo
2. Create new Web Service
3. Root Directory: `backend`
4. Build Command: `npm install`
5. Start Command: `npm start`
6. Add Environment Variable: `GEMINI_API_KEY`

#### Option 3: Vercel (Serverless)
```bash
cd backend
vercel
# Add GEMINI_API_KEY in Vercel dashboard
```

### Frontend:

#### Deploy to Netlify
```bash
cd frontend
# Drag and drop the frontend folder to netlify.com
# Or use Netlify CLI:
npm install -g netlify-cli
netlify deploy
```

**Important:** Update `API_URL` in `index.html` from `localhost:3001` to your deployed backend URL.

## 💰 Pricing

### Gemini Free Tier:
- ✅ **1,500 requests/day** (50+ articles per day)
- ✅ **100% FREE**
- ✅ No credit card required

### Gemini Paid Tier (if you exceed free):
- 💵 $0.003-0.01 per article
- 💵 ~10x cheaper than Claude/OpenAI

## 🔧 Troubleshooting

### "Server is not running" Error
```bash
cd backend
npm start
# Make sure you see: ✅ Server running on http://localhost:3001
```

### "Key Missing" Error
```bash
# Check your .env file exists in backend folder
cat backend/.env
# Should show: GEMINI_API_KEY=your_key_here
```

### CORS Error
- Make sure backend server is running first
- Check that API_URL in index.html points to correct backend URL

## 📁 Project Structure
```
ai-tech-news-generator/
├── frontend/
│   └── index.html          # React app (no build needed!)
├── backend/
│   ├── server.js           # Express + Gemini API
│   ├── package.json        # Dependencies
│   └── .env                # Your API key (not committed)
├── .gitignore
└── README.md
```

## 🎯 Example Topics

- "iPhone 16 Pro Max features"
- "Tesla Cybertruck delivery updates"
- "ChatGPT-5 release date"
- "Samsung Galaxy S24 Ultra specs"
- "Meta Quest 3 vs Apple Vision Pro"
- "NVIDIA RTX 5090 benchmarks"

## 📝 License

MIT License - feel free to use and modify!

## 🤝 Contributing

Pull requests are welcome! For major changes, please open an issue first.

## 💬 Support

- Issues: GitHub Issues
- Questions: Open a discussion

---

Made with ❤️ using Google Gemini AI
