const express = require('express');
const dotenv = require('dotenv');
const logRoutes = require('./routes/logRoutes');

dotenv.config();
const app = express();
app.use(express.json());

app.use('/logs', logRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`QA Tool running on port ${PORT}`);
});
