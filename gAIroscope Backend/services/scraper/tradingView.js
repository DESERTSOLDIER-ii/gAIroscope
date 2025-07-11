const axios = require('axios');
const cheerio = require('cheerio');

const tradingViewScraper = async () => {
  try {
    const url = 'https://www.tradingview.com/symbols/XAUUSD/';
    const { data } = await axios.get(url);
    const $ = cheerio.load(data);

    const price = $('div[data-symbol="XAUUSD"] span').first().text();
    return { source: 'TradingView', index: 'XAU/USD', price };
  } catch (error) {
    console.error('TradingView scrape failed:', error.message);
    return null;
  }
};

module.exports = tradingViewScraper;
