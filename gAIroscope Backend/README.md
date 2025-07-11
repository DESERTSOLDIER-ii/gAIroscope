
# gAIroscope Backend

## Description
This is the full Node.js + Express backend for the gAIroscope application, built to support an AI-driven stock market prediction platform.

## Features
- MongoDB for user, chat, and prediction data
- Google Gemini AI API integrated
- User authentication (email-based)
- Financial data scraping from public sources
- Notification engine
- Real-time chart data endpoints
- AI chat system with conversation tracking
- Background data update engine

## Getting Started

### 1. Setup
- Copy `.env.example` to `.env`
- Update your `.env` with real credentials if needed

### 2. Install dependencies
```
npm install
```

### 3. Run the development server
```
npm run dev
```

### 4. Deploy to Render
- Use the `render.yaml` for Render deployment config
- Point your frontend to `https://your-backend.onrender.com`

### 5. Test your endpoints
Use Postman or visit:
- `/api/market/us100` - Sample endpoint
- `/api/auth/login` - Auth test

### AI Integration
- Integrated with Google Gemini using your API key

### More
For full setup, refer to the documentation inside `docs/` or message your dev team.

