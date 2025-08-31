const mongoose = require('mongoose');

const EnrollmentSchema = new mongoose.Schema({
  userId: { type: String, required: true },
  courseId: { type: String, required: true },
  courseName: { type: String },
  enrolledAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Enrollment', EnrollmentSchema);
