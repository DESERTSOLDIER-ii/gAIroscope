const yahooScraper = require('./scraper/yahooFinance');
const bloombergScraper = require('./scraper/bloomberg');
const investingScraper = require('./scraper/investing');
const cnbcScraper = require('./scraper/cnbc');
const liteFinanceScraper = require('./scraper/liteFinance');
const igMarketsScraper = require('./scraper/igMarkets');
const derivScraper = require('./scraper/deriv');
const tradingViewScraper = require('./scraper/tradingView');
const forexFactoryScraper = require('./scraper/forexFactory');
const macrooptionScraper = require('./scraper/macrooption');

async function getAllScrapedData() {
  const results = await Promise.all([
    yahooScraper(),
    bloombergScraper(),
    investingScraper(),
    cnbcScraper(),
    liteFinanceScraper(),
    igMarketsScraper(),
    derivScraper(),
    tradingViewScraper(),
    forexFactoryScraper(),
    macrooptionScraper(),
  ]);

  return results.filter(Boolean);
}

module.exports = { getAllScrapedData };
