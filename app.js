const express = require('express');
const mysql = require('mysql');
const dotenv = require('dotenv').config();
const PORT = process.env.PORT || 3000;
const app = express();

app.get('/', (req, res) => {
  res.send('Hello from sidehustle');
});

app.get('/about', (req, res) => {
  res.send('About sidehustle');
});

app.listen(PORT, () => {
  console.log(`Server listening on port:${PORT}`);
});
