const axios = require('axios');
const cheerio = require('cheerio');

const macrooptionScraper = async () => {
  try {
    const url = 'https://www.macroption.com/vix-calculation/';
    const { data } = await axios.get(url);
    const $ = cheerio.load(data);

    const headline = $('h1').first().text();
    return { source: 'Macrooption', index: 'VIX', info: headline };
  } catch (error) {
    console.error('Macrooption scrape failed:', error.message);
    return null;
  }
};

module.exports = macrooptionScraper;
