const Exercise = require('../models/Exercise');
const jwt = require('jsonwebtoken');
const { request } = require('express');

const accessTokenSecret = 'ifrs-ppip2';

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
  },

  authenticateJWT(req, res, next) {
    const authHeader = req.headers.authorization;

    if (!authHeader) {
      throw new Error('JWT token is missing');
    }

    const token = authHeader.split(' ')[1];

    try {
      const decoded = jwt.verify(token, accessTokenSecret)

      const { sub } = decoded;

      request.user = {
        id: sub,
      };

      return next();
    } catch {
      throw new Error('Invalid JWT token');
    }
  },
};
