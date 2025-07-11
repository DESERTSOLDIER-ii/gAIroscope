// controllers/chartController.js
const { getIndexData, generatePrediction } = require('../services/marketService');

exports.getChartData = async (req, res) => {
  try {
    const { index } = req.params;
    const rawData = await getIndexData(index);
    const prediction = await generatePrediction(rawData);

    res.status(200).json({ index, rawData, prediction });
  } catch (err) {
    console.error('Chart Data Error:', err);
    res.status(500).json({ error: 'Failed to fetch chart data.' });
  }
};
