const express = require('express');
const router = express.Router();
const Course = require('../models/Course');
router.get('/', async (req, res) => {
  const courses = await Course.find()
      res.json(courses);
});

router.get('/:id', async (req, res) => {
  try {
    const course = await Course.findById(req.params.id)
    if (!course) {
      return res.status(404).json({ message: 'Course not found' });
    }

    res.json(course);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

  
module.exports = router;
