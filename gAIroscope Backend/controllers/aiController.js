// controllers/aiController.js
const { chatWithGemini } = require('../services/aiService');
const Conversation = require('../models/Conversation');

exports.handleAIChat = async (req, res) => {
  try {
    const { userId, message } = req.body;
    const reply = await chatWithGemini(message);

    const saved = await Conversation.create({
      userId,
      prompt: message,
      response: reply,
      createdAt: new Date(),
    });

    res.status(200).json({ reply, saved });
  } catch (err) {
    console.error('AI Chat Error:', err);
    res.status(500).json({ error: 'Failed to handle AI conversation.' });
  }
};
