const express = require('express');
const router = express.Router();
const { parseLog } = require('../utils/logParser');

router.post('/parse', (req, res) => {
  const { logContent } = req.body;
  const result = parseLog(logContent);
  res.json(result);
});

module.exports = router;
