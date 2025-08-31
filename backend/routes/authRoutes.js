const express = require('express');
const router = express.Router();
const { registerUser, loginUser } = require('../controllers/authController');
const auth = require('../middleware/auth');

router.post('/register', registerUser);
router.post('/login', loginUser);

router.get('/me', auth, async (req, res) => {
  try {
    res.json(req.user);
  } catch (err) {
    res.status(500).json({ error: 'Server Error' });
  }
});

module.exports = router;
