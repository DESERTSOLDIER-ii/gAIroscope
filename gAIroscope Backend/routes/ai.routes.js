import express from 'express';
import {
  sendAIMessage,
  listConversations,
  startConversation
} from '../controllers/ai.controller.js';

const router = express.Router();

router.post('/message', sendAIMessage);
router.get('/conversations', listConversations);
router.post('/conversations', startConversation);

export default router;
