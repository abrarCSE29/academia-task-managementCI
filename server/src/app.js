require('dotenv').config();

const express = require('express');
const helmet = require('helmet');
const cors = require('cors');

const config = require('./config');

const app = express();

app.use(express.json());
app.use(helmet());
app.use(cors(config.cors));

app.get('/_status', (req, res) => {
  res.status(200).json({ status: 'OK' });
});

app.listen(config.app.port, () => {
  console.log(`Example app listening on port ${config.app.port}`);
});
