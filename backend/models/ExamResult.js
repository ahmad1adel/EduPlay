const mongoose = require('mongoose');

const answerSchema = new mongoose.Schema({
  questionId: { type: mongoose.Schema.Types.ObjectId, ref: 'Question' },
  selected: String,
  isCorrect: Boolean,
  points: Number
});

const examResultSchema = new mongoose.Schema({
  studentId: { type: mongoose.Schema.Types.ObjectId, ref: 'Student', required: true },
  courseId: { type: mongoose.Schema.Types.ObjectId, ref: 'Course', required: true },
  courseName: { type: String },
  answers: [answerSchema],
  totalScore: Number,
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('ExamResult', examResultSchema);
