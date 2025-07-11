import axios from 'axios';

const GEMINI_API_KEY = 'AIzaSyBOnzu1W1DRXcS7pcqPufCozSstrllUCGA';
const GEMINI_API_URL = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-pro:generateContent';

export const askGemini = async (message) => {
  try {
    const { data } = await axios.post(
      GEMINI_API_URL,
      {
        contents: [{ parts: [{ text: message }] }]
      },
      {
        headers: {
          'Content-Type': 'application/json',
          'X-goog-api-key': GEMINI_API_KEY
        }
      }
    );

    return data.candidates?.[0]?.content?.parts?.[0]?.text || 'No response from Gemini.';
  } catch (err) {
    console.error('Gemini API error:', err.message);
    return 'Error communicating with AI.';
  }
};
