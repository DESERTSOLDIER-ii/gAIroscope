const axios = require('axios');
const cheerio = require('cheerio');

const investingScraper = async () => {
  try {
    const url = 'https://www.investing.com/indices/nq-100-futures'; // NASDAQ futures
    const { data } = await axios.get(url, {
      headers: { 'User-Agent': 'Mozilla/5.0' } // Avoid block
    });
    const $ = cheerio.load(data);

    const price = $('#last_last').first().text();
    return { source: 'Investing.com', index: 'NASDAQ Futures', price };
  } catch (error) {
    console.error('Investing.com scrape failed:', error.message);
    return null;
  }
};

module.exports = investingScraper;
