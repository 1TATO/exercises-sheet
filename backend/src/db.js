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

// module.exports = {
//   sequelize,

//   async syncDb() {
//     await sequelize.sync({ force: true });
//     console.log("Todos os Models foram sincronizados com sucesso.");
//   },

//   async sequelizeConnection() {
//     try {
//       await sequelize.authenticate();
//       console.log('Connection has been established successfully.');
//     } catch (error) {
//       console.error('Unable to connect to the database:', error);
//     }
//   },

//   async selectExercises(req, res) {
//     db.query('SELECT * FROM exercises', (err, results) => {
//       if (err) {
//         throw err;
//       }

//       console.log(results);
//       res.json(results)
//     })
//   },

//   async insertExercise(req, res) {
//     const exercise = req.body;

//     db.query('INSERT INTO exercises SET ?', exercise, (err, results) => {
//       if (err) {
//         throw err;
//       }

//       console.log('Last insert ID:', results.insertId);
//       res.json(results);
//     });
//   },

//   async updateExercise(req, res) {
//     const id = req.params.id;
//     const { name } = req.body;

//     db.query('UPDATE exercises SET name = ? Where ID = ?', [name, id], (err, results) => {
//       if (err) {
//         throw err;
//       }

//       console.log(`Changed ${results.changedRows} row(s)`);
//       res.json(results);
//     });
//   },

//   async deleteExercise(req, res) {
//     const id = req.params.id;

//     db.query('DELETE FROM exercises WHERE id = ?', id, (err, results) => {
//       if (err) {
//         throw err;
//       }

//       console.log(`Deleted ${results.affectedRows} row(s)`);
//       res.json(results);
//     });
//   }
// }
