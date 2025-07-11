const classifyNewsImpact = (headline, content) => {
  const text = `${headline} ${content}`.toLowerCase();

  if (text.includes("interest rate") || text.includes("inflation") || text.includes("cpi")) {
    return "High Impact";
  }

  if (text.includes("earnings") || text.includes("forecast") || text.includes("market trend")) {
    return "Medium Impact";
  }

  return "Low Impact";
};

module.exports = { classifyNewsImpact };
