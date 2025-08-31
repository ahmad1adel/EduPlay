const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

exports.registerUser = async (req, res) => {
  try {
    const { username, email, password, age, role, avatarURL } = req.body;

    if (role === 'Child' && (age === undefined || age === null)) {
      return res.status(400).json({ error: 'Age is required for children' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({
      username,
      email,
      password: hashedPassword,
      age: role === 'Child' ? age : undefined,
      role,
      avatarURL
    });

    await newUser.save();
    res.status(201).json({ message: 'User registered successfully', user: newUser });

  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Registration failed', details: err.message });
  }
};

exports.loginUser = async (req, res) => {
  try {
    const { username, password } = req.body;

    const user = await User.findOne({ username });
    if (!user) {
      return res.status(400).json({ error: 'UserName is Wrong' });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ error: 'Password is Wrong' });
    }

    const token = jwt.sign(
      { id: user._id, role: user.role },
      process.env.JWT_SECRET,
      { expiresIn: '1d' }
    );

    res.status(200).json({
      message: 'User Login successfully',
      token,
      user: {
        id: user._id,
        username: user.username,
        role: user.role
      }
    });
  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({ error: 'Server Failed'});
  }
};
