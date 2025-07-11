// controllers/authController.js
const User = require('../models/User');
const jwt = require('jsonwebtoken');

exports.register = async (req, res) => {
  try {
    const { name, email, phone } = req.body;
    const existing = await User.findOne({ email });

    if (existing) return res.status(400).json({ message: 'User already exists.' });

    const user = await User.create({ name, email, phone });
    res.status(201).json({ user });
  } catch (err) {
    console.error('Register Error:', err);
    res.status(500).json({ message: 'Registration failed.' });
  }
};

exports.login = async (req, res) => {
  try {
    const { email } = req.body;
    const user = await User.findOne({ email });

    if (!user) return res.status(404).json({ message: 'User not found.' });

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1d' });
    res.status(200).json({ token, user });
  } catch (err) {
    console.error('Login Error:', err);
    res.status(500).json({ message: 'Login failed.' });
  }
};
