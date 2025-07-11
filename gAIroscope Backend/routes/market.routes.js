import express from 'express';
import {
  getMarketData,
  getPrediction,
  updateHistoricalData
} from '../controllers/market.controller.js';

const router = express.Router();

router.get('/:index/data', getMarketData);
router.get('/:index/predict', getPrediction);
router.post('/:index/update', updateHistoricalData);

export default router;
