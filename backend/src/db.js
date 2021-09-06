const mysql = require('mysql2');

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '123456',
  database: 'ppip2'
});

db.connect((err) => {
  if (err) {
    console.log(err)
    console.log('Erro ao conectar ao banco de dados');
    return;
  }

  console.log('Conexao estabelecida');
});

module.exports = {
  async selectExercises(req, res) {
    db.query('SELECT * FROM exercises', (err, results) => {
      if (err) {
        throw err;
      }

      console.log(results);
      res.json(results)
    })
  },

  async insertExercise(req, res) {
    const exercise = req.body;

    db.query('INSERT INTO exercises SET ?', exercise, (err, results) => {
      if (err) {
        throw err;
      }

      console.log('Last insert ID:', results.insertId);
      res.json(results);
    });
  },

  async updateExercise(req, res) {
    const id = req.params.id;
    const { name } = req.body;

    db.query('UPDATE exercises SET name = ? Where ID = ?', [name, id], (err, results) => {
      if (err) {
        throw err;
      }

      console.log(`Changed ${results.changedRows} row(s)`);
      res.json(results);
    });
  },

  async deleteExercise(req, res) {
    const id = req.params.id;

    db.query('DELETE FROM exercises WHERE id = ?', id, (err, results) => {
      if (err) {
        throw err;
      }

      console.log(`Deleted ${results.affectedRows} row(s)`);
      res.json(results);
    });
  }
}
