const mongoose = require('mongoose');

const questionSchema = new mongoose.Schema({
  courseId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Course',
    required: true
  },
  text: String,
  choices: [String],
  correct: String,
  score: Number,
  points: Number
});

module.exports = mongoose.model('Question', questionSchema);
