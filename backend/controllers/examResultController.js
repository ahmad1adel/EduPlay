const ExamResult = require('../models/ExamResult');
const Course = require('../models/Course');

exports.saveExamResult = async (req, res) => {
  const { studentId, courseId, answers, totalScore } = req.body;

  try {
    const course = await Course.findById(courseId);
    
    const existing = await ExamResult.findOne({ studentId, courseId });
    if (existing) {
      return res.status(400).json({ message: 'Exam already submitted for this course.' });
    }

    const result = new ExamResult({
      studentId,
      courseId,
      courseName: course?.title || 'Unknown',
      answers,
      totalScore
    });

    await result.save();
    res.status(201).json({ message: 'Exam result saved successfully' });

  } catch (err) {
    console.error('Error saving result:', err);
    res.status(500).json({ message: 'Server error' });
  }
};

exports.getStudentResults = async (req, res) => {
  try {
    const results = await ExamResult.find({ studentId: req.params.studentId });
    res.json(results);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
};

exports.checkIfStudentHasExamResult = async (req, res) => {
  const { studentId, courseId } = req.params;
  try {
    const existing = await ExamResult.findOne({ studentId, courseId });
    res.json({ hasResult: !!existing });
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
};
