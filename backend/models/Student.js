const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
  name: String,
  avatarUrl: String,
});

module.exports = mongoose.model('Student', studentSchema);
