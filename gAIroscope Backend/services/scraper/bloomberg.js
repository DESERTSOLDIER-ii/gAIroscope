const axios = require('axios');
const cheerio = require('cheerio');

const bloombergScraper = async () => {
  try {
    const url = 'https://www.bloomberg.com/quote/NDX:IND'; // NASDAQ index
    const { data } = await axios.get(url);
    const $ = cheerio.load(data);

    const price = $('.price').first().text();
    return { source: 'Bloomberg', index: 'NASDAQ', price };
  } catch (error) {
    console.error('Bloomberg scrape failed:', error.message);
    return null;
  }
};

module.exports = bloombergScraper;
