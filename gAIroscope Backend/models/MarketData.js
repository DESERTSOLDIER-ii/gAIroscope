const mongoose = require('mongoose');

const MarketDataSchema = new mongoose.Schema({
  source: String,
  index: String,
  price: String,
  info: String,
  news: Array,
  timestamp: { type: Date, default: Date.now }
});

module.exports = mongoose.model('MarketData', MarketDataSchema);
