function parseLog(logContent) {
  const lines = logContent.split('\n');
  const errors = lines.filter(line => line.includes('ERROR'));
  const warnings = lines.filter(line => line.includes('WARN'));

  return {
    totalLines: lines.length,
    errors,
    warnings
  };
}

module.exports = { parseLog };
