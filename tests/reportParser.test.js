const { parseLog } = require('../src/utils/logParser');

test('parses log content correctly', () => {
  const log = "INFO: Start\nWARN: Something odd\nERROR: Failed test";
  const result = parseLog(log);

  expect(result.totalLines).toBe(3);
  expect(result.errors.length).toBe(1);
  expect(result.warnings.length).toBe(1);
});
