const express = require('express');

const app = express();

app.use(express.json());

app.get('/dashboard', (req, res) => {
  return res.json([
    'Supino'
  ]);
});

app.post('/dashboard', (req, res) => {
  const params = request.body;

  return res.json([
    'Supino',
    'Biceps'
  ])
});

app.put('/dashboard/:id', (req, res) => {
  const { id } = req.params;
  console.log(id)

  return res.json([
    'Perna',
    'Biceps'
  ])
});

app.delete('/dashboard/:id', (req, res) => {
  return res.json([
    'Supino',
  ])
});

app.listen(3333, () => {
  console.log('Back-end started');
});