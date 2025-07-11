module.exports = (err, req, res, next) => {
  console.error("❌ Error:", err.stack || err);
  res.status(500).json({
    message: "Something went wrong!",
    error: process.env.NODE_ENV === 'development' ? err.stack : undefined,
  });
};
