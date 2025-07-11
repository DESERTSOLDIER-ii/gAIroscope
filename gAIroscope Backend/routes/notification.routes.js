import express from 'express';
import {
  getNotifications,
  sendNotification
} from '../controllers/notification.controller.js';

const router = express.Router();

router.get('/', getNotifications);
router.post('/', sendNotification);

export default router;
