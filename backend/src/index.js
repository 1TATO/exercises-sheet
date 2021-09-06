const express = require('express');
const db = require('./db');

const app = express();

app.use(express.json());

app.use('/', require('./routes'));

db.sync().then(() => {
  console.log(`Banco de dados conectado: ${process.env.DB_NAME}`);
});

app.listen(3333, () => {
  console.log('Back-end started');
});
