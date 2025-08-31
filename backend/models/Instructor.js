const mongoose = require('mongoose');

const instructorSchema = new mongoose.Schema({
  name: { type: String, required: true },
  avatarUrl: String,
});

module.exports = mongoose.model('Instructor', instructorSchema);