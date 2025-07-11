import { HistoricalData } from '../models/historical.model.js';

export const generatePrediction = async (index) => {
  const history = await HistoricalData.find({ index }).sort({ timestamp: -1 }).limit(100);

  if (history.length < 10) return null;

  const prices = history.map((h) => h.price);
  const trend = prices[0] - prices[prices.length - 1];
  const direction = trend > 0 ? 'bullish' : 'bearish';

  const prediction = {
    index,
    score: Math.random() * (100 - 50) + 50, // dummy confidence
    direction,
    time: new Date(Date.now() + 60000) // prediction for next minute
  };

  return prediction;
};
