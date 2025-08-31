const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
  title: String,
  imageUrl: String,
  enrollmentType: String,
  instructor: { type: mongoose.Schema.Types.ObjectId, ref: 'instructor' },
  enrolledStudents: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Student' }],
  moreStudentsCount: Number,
  chapters: [
    {
      chapter: Number,
      title: String,
      duration: String,
      url: String,
    },
  ],
});

module.exports = mongoose.model('Course', courseSchema);