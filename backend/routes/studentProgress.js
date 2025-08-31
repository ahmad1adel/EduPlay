// const express = require('express');
// const router = express.Router();
// const Enrollment = require('../models/Enrollment');
// const WatchedVideo = require('../models/WatchedVideo');
// const ExamResult = require('../models/ExamResult');
// const Course = require('../models/Course');

// router.get('/:userId/progress', async (req, res) => {
//   const { userId } = req.params;

//   try {
//     const enrollments = await Enrollment.find({ userId });

//     const progress = await Promise.all(enrollments.map(async (enroll) => {
//       const course = await Course.findById(enroll.courseId);
//       const courseName = course ? course.title : 'Unknown Course';

//       const watchedVideos = await WatchedVideo.find({
//         userId,
//         courseId: enroll.courseId
//       });

//       const videosWatched = watchedVideos.length;

//       // Extract titles of watched videos from course chapters
//       const videoTitles = [];
//       if (course && course.chapters) {
//         for (const watched of watchedVideos) {
//           const chapter = course.chapters.find(c => c.url === watched.videoUrl);
//           if (chapter) {
//             videoTitles.push(chapter.title);
//           }
//         }
//       }

//       const examResults = await ExamResult.find({
//         userId,
//         courseId: enroll.courseId
//       });

//       const totalExamPoints = examResults.reduce((acc, result) => acc + (result.score || 0), 0);

//       return {
//         courseName,
//         enrolledAt: enroll.enrolledAt,
//         videosWatched,
//         videoTitles,
//         totalExamPoints
//       };
//     }));

//     const totalPoints = progress.reduce((acc, p) => acc + (p.totalExamPoints || 0), 0);

//     res.json({ progress, totalPoints });

//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ message: 'Server error' });
//   }
// });

// module.exports = router;


const express = require('express');
const router = express.Router();
const Enrollment = require('../models/Enrollment');
const WatchedVideo = require('../models/WatchedVideo');
const ExamResult = require('../models/ExamResult');
const Course = require('../models/Course');

router.get('/:userId/progress', async (req, res) => {
  const { userId } = req.params;

  try {
    const enrollments = await Enrollment.find({ userId });

    const progress = await Promise.all(enrollments.map(async (enroll) => {
      const course = await Course.findById(enroll.courseId);
      const courseName = course ? course.title : 'Unknown Course';

      const watched = await WatchedVideo.find({
        userId,
        courseId: enroll.courseId
      });

      const videoTitles = watched.map(w => {
        const chapter = course?.chapters?.[w.videoIndex];
        return chapter?.title || `Video ${w.videoIndex + 1}`;
      });
      
      const videosWatched = watched.length;

      const latestExamResult = await ExamResult.findOne({
        studentId: userId,
        courseId: enroll.courseId
      }).sort({ createdAt: -1 });

      const totalExamPoints = latestExamResult?.totalScore || 0;

      return {
        courseName,
        enrolledAt: enroll.enrolledAt,
        videosWatched,
        totalExamPoints,
        videoTitles
      };
    }));

    const totalPoints = progress.reduce((acc, p) => acc + (p.totalExamPoints || 0), 0);

    res.json({ progress, totalPoints });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;
