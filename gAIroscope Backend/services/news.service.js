import axios from 'axios';
import * as cheerio from 'cheerio';

export const getMarketNews = async () => {
  try {
    const { data } = await axios.get('https://www.cnbc.com/finance/');
    const $ = cheerio.load(data);

    const headlines = [];
    $('a.Card-title').each((i, el) => {
      headlines.push({
        title: $(el).text(),
        link: 'https://www.cnbc.com' + $(el).attr('href')
      });
    });

    return headlines.slice(0, 5);
  } catch (err) {
    console.error('News scrape error:', err.message);
    return [];
  }
};
