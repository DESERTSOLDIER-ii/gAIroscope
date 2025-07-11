module.exports = {
  PREDICTION_CATEGORIES: {
    STRONG_BUY: "Strong Buy",
    BUY: "Buy",
    WEAK_BUY: "Weak Buy",
    STRONG_SELL: "Strong Sell",
    SELL: "Sell",
    WEAK_SELL: "Weak Sell",
  },
  ACCURACY_THRESHOLDS: {
    STRONG: [80, 100],
    MODERATE: [51, 79],
    WEAK: [30, 50],
  },
  SUPPORTED_INDEXES: ["VIX75", "XAUUSD", "US30", "US100"]
};
