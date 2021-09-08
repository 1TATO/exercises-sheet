const User = require('../models/User');
const jwt = require('jsonwebtoken');

const accessTokenSecret = 'ifrs-ppip2';
const express = require('express');

module.exports = {
  async findAll(req, res) {
    try {
      const users = await User.findAll();

      return res.json(users);
    } catch (err) {
      return res.status(400).json({ error: err.message });
    }
  },

  async authenticateUser(req, res) {
    try {
      const users = await User.findAll(req.body);
      const { email, password } = req.body;

      const user = users.find(u => {
        return u.email === email && u.password === password
      });

      if (!user) {
        throw new Error('E-mail ou senha incorretos');
      }

      const token = jwt.sign({}, accessTokenSecret, {
        subject: String(user.id),
        expiresIn: '1d',
      });

      return res.json ({
        user,
        token
      });
    } catch (err) {
      return res.status(400).json({ error: err.message });
    }
  },

  async createUser(req, res) {
    try {
      const user = await User.create(req.body);

      return res.json(user);
    } catch (err) {
      return res.status(400).json({ error: err.message });
    }
  },

  async destroyUser(req, res) {
    try {
      const user = await User.findByPk(req.params.id);
      await user.destroy();

      return res.json();
    } catch (err) {
      return res.status(400).json({ error: err.message });
    }
  }
};
