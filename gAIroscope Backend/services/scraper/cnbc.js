const axios = require('axios');
const cheerio = require('cheerio');

const cnbcScraper = async () => {
  try {
    const url = 'https://www.cnbc.com/quotes/.IXIC';
    const { data } = await axios.get(url);
    const $ = cheerio.load(data);

    const price = $('[data-test="quoteLast"]').first().text();
    return { source: 'CNBC', index: 'NASDAQ', price };
  } catch (error) {
    console.error('CNBC scrape failed:', error.message);
    return null;
  }
};

module.exports = cnbcScraper;
