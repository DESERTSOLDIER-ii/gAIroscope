const axios = require('axios');
const cheerio = require('cheerio');

const forexFactoryScraper = async () => {
  try {
    const url = 'https://www.forexfactory.com/calendar';
    const { data } = await axios.get(url);
    const $ = cheerio.load(data);

    const impactNews = [];
    $('.calendar__row--high').each((i, el) => {
      const time = $(el).find('.calendar__time').text();
      const event = $(el).find('.calendar__event').text();
      impactNews.push({ time, event });
    });

    return { source: 'Forex Factory', news: impactNews };
  } catch (error) {
    console.error('Forex Factory scrape failed:', error.message);
    return null;
  }
};

module.exports = forexFactoryScraper;
