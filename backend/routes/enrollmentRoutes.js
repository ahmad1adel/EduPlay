const express = require('express');
const router = express.Router();
const Enrollment = require('../models/Enrollment');


router.post('/check', async (req, res) => {
  const { userId, courseId } = req.body;

  if (!userId || !courseId) {
    return res.status(400).json({ message: 'Missing userId or courseId' });
  }

  try {
    const existing = await Enrollment.findOne({ userId, courseId });
    res.json({ enrolled: !!existing });
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
});

router.post('/enroll', async (req, res) => {
  const { userId, courseId, courseName } = req.body;

  if (!userId || !courseId) {
    return res.status(400).json({ message: 'Missing userId or courseId' });
  }

  try {
    const exists = await Enrollment.findOne({ userId, courseId });
    if (!exists) {
      await Enrollment.create({ userId, courseId, courseName });
    }
    res.status(200).json({ success: true });
  } catch (err) {
    res.status(500).json({ message: 'Enrollment failed', error: err.message });
  }
});

module.exports = router;
