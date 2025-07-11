const axios = require('axios');

const igMarketsScraper = async () => {
  try {
    // Normally IG Markets is authenticated, use a mock or alternative API
    const price = (Math.random() * 200 + 16000).toFixed(2); // Mock data
    return { source: 'IG Markets', index: 'Wall Street 30', price };
  } catch (error) {
    console.error('IG Markets scrape failed:', error.message);
    return null;
  }
};

module.exports = igMarketsScraper;
