const mongoose = require('mongoose');

const ErrorLogSchema = new mongoose.Schema({
  errorMessage: String,
  location: String,
  stackTrace: String,
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('ErrorLog', ErrorLogSchema);
