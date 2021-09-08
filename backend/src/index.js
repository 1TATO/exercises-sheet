const express = require('express');
const db = require('./db');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/', require('./routes'));

db.sync().then(() => {
  console.log(`Banco de dados conectado: ${process.env.DB_NAME}`);
});

app.listen(3333, () => {
  console.log('Back-end started');
});
