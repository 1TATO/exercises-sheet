const Exercise = require('../models/Exercise');

module.exports = {
  async findAll(req, res) {
    try {
      const exercises = await Exercise.findAll();

      return res.json(exercises);
    } catch (err) {
      return res.status(400).json({ error: err.message });
    }
  },

  async createExercise(req, res) {
    try {
      const exercises = await Exercise.create(req.body);

      return res.json(exercises);
    } catch (err) {
      return res.status(400).json({ error: err.message });
    }
  },

  async updateExercise(req, res) {
    try {
      const exercises = await Exercise.findByPk(req.params.id);
      await exercises.update(req.body);

      return res.json({ exercises });
    } catch (err) {
      return res.status(400).json({ error: err.message });
    }
  },

  async destroyExercise(req, res) {
    try {
      const exercise = await Exercise.findByPk(req.params.id);
      await exercise.destroy();

      return res.json();
    } catch (err) {
      return res.status(400).json({ error: err.message });
    }
  }
};
