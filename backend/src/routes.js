const express = require('express');
const db = require('./db');
const routes = express.Router();

routes.get('/dashboard', db.selectExercises);

routes.post('/dashboard', db.insertExercise);

routes.put('/dashboard/:id', db.updateExercise);

routes.delete('/dashboard/:id', db.deleteExercise);

module.exports = routes;
