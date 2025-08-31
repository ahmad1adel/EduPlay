const mongoose = require('mongoose');

const watchedVideoSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'User' },
  courseId: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'Course' },
  videoIndex: { type: Number, required: true },
  watchedAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('WatchedVideo', watchedVideoSchema);
