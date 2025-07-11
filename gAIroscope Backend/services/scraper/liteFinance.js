const axios = require('axios');
const cheerio = require('cheerio');

const liteFinanceScraper = async () => {
  try {
    const url = 'https://www.litefinance.org/trading/instruments/us100/';
    const { data } = await axios.get(url);
    const $ = cheerio.load(data);

    const price = $('.tradingview-widget-container__value').first().text();
    return { source: 'LiteFinance', index: 'US100', price };
  } catch (error) {
    console.error('LiteFinance scrape failed:', error.message);
    return null;
  }
};

module.exports = liteFinanceScraper;
