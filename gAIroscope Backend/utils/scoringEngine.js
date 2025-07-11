const getPredictionLabel = (score) => {
  if (score >= 80) return "Strong";
  if (score >= 51) return "Moderate";
  if (score >= 30) return "Weak";
  return "Unreliable";
};

const getPredictionType = (direction, score) => {
  const strength = getPredictionLabel(score);

  if (direction === "buy") return `${strength} Buy`;
  if (direction === "sell") return `${strength} Sell`;

  return "Unknown";
};

module.exports = { getPredictionLabel, getPredictionType };
