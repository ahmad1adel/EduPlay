// examResultRoutes.js
const express = require('express');
const router = express.Router();
const { saveExamResult, checkIfStudentHasExamResult } = require('../controllers/examResultController');
const ExamResult = require('../models/ExamResult');

router.post('/', saveExamResult);

router.get('/check/:studentId/:courseId', checkIfStudentHasExamResult);

router.get('/:studentId', async (req, res) => {
  try {
    const results = await ExamResult.find({ studentId: req.params.studentId });
    res.json(results);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error fetching results' });
  }
});

module.exports = router;
