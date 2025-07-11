// controllers/searchController.js
const { performInternalSearch } = require('../services/searchService');

exports.initiateSearch = async (req, res) => {
  try {
    const { reason } = req.body;
    const results = await performInternalSearch(reason);
    res.status(200).json({ results });
  } catch (err) {
    console.error('Search Error:', err);
    res.status(500).json({ error: 'Search failed.' });
  }
};
