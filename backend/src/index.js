const express = require('express');

const app = express();

app.get('/', (req, res) => {
  return res.json({ message: 'Hello 123' });
});

app.listen(3333, () => {
  console.log('Back-end started');
});