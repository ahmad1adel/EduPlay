const express = require('express');
const router = express.Router();
const Question = require('../models/Question');

router.get('/course/:courseId', async (req, res) => {
  try {
    const { courseId } = req.params;
    const questions = await Question.find({ courseId });
    res.json(questions);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
});


router.post('/', async (req, res) => {
  try {
    const { courseId, questions } = req.body;

    if (!courseId || !Array.isArray(questions)) {
      return res.status(400).json({ message: 'Missing courseId or invalid questions array' });
    }

    const questionDocs = questions.map(q => ({
      courseId,
      text: q.text,
      choices: q.choices,
      correct: q.correct,
      score: q.score,
      points: q.points
    }));

    await Question.insertMany(questionDocs);
    res.status(201).json({ message: 'Questions saved successfully' });
  } catch (err) {
    console.error('❌ Error saving questions:', err);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;
