const express = require('express');
const routes = express.Router();

const users = require('./controllers/UserController');
const exercises = require('./controllers/ExerciseController');

routes.get('/users', users.findAll);
routes.post('/users', users.authenticateUser);
routes.post('/signup', users.createUser);
routes.delete('/users/:id', users.destroyUser);

routes.get('/dashboard', exercises.findAll);
routes.post('/dashboard', exercises.createExercise);
routes.put('/dashboard/:id', exercises.updateExercise);
routes.delete('/dashboard/:id', exercises.destroyExercise);

module.exports = routes;
