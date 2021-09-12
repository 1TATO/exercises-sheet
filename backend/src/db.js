const mysql = require('mysql2');
const { Sequelize } = require('sequelize');
require('dotenv/config');

const dbName = process.env.DB_NAME;
const dbUser = process.env.DB_USER;
const dbHost = process.env.DB_HOST;
const dbPassword = process.env.DB_PASSWORD;
const dbDialect = process.env.DB_DIALECT;

const sequelize = new Sequelize(dbName, dbUser, dbPassword, {
  dialect: dbDialect,
  host: dbHost
});

const db = mysql.createConnection({
  host: dbHost,
  user: dbUser,
  password: dbPassword,
  database: dbDialect
});

db.connect((err) => {
  if (err) {
    console.log(err)
    console.log('Erro ao conectar ao banco de dados');
    return;
  }

  console.log('Conexao estabelecida');
});

module.exports = sequelize;
