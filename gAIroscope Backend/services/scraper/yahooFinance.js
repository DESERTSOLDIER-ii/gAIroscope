const axios = require('axios');
const cheerio = require('cheerio');

const yahooScraper = async () => {
  try {
    const url = 'https://finance.yahoo.com/quote/^IXIC'; // NASDAQ as example
    const { data } = await axios.get(url);
    const $ = cheerio.load(data);

    const price = $('fin-streamer[data-field="regularMarketPrice"]').first().text();
    return { source: 'Yahoo Finance', index: 'NASDAQ', price };
  } catch (error) {
    console.error('Yahoo Finance scrape failed:', error.message);
    return null;
  }
};

module.exports = yahooScraper;
