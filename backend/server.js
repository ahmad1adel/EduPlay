const express = require('express');
const cors = require('cors');
require('dotenv').config();
const connectDB = require('./config/db');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Connect to MongoDB
connectDB();

// Routes
app.use('/api/auth', require('./routes/authRoutes'));
app.use('/api/enrollment', require('./routes/enrollmentRoutes'));
app.use('/api/upload', require('./routes/upload'));
app.use('/api/courses', require('./routes/courseRoutes'));
app.use('/api/watched', require('./routes/watchedRoutes'));
app.use("/api/questions", require("./routes/questionRoutes"));
app.use('/api/examresults', require('./routes/examResultRoutes')); 
app.use('/api/student', require('./routes/studentProgress'));
app.use('/api/parents', require('./routes/parentRoutes'));
app.use('/api/exam-results', require('./routes/examResultRoutes'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
