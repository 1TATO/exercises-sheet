const User = require('../models/User');

module.exports = {
  async findAll(req, res) {
    try {
      const users = await User.findAll();
      return res.json(users);
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
};
