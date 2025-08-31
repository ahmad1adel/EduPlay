const express = require('express');
const router = express.Router();
const WatchedVideo = require('../models/WatchedVideo');

router.post('/', async (req, res) => {
  const { userId, courseId, videoIndex } = req.body;

  if (!userId || !courseId || videoIndex === undefined) {
    return res.status(400).json({ message: 'Missing required fields' });
  }

  try {
    const alreadyWatched = await WatchedVideo.findOne({ userId, courseId, videoIndex });

    if (alreadyWatched) {
      return res.status(200).json({ message: 'Already marked as watched' });
    }

    const watched = new WatchedVideo({ userId, courseId, videoIndex });
    await watched.save();

    res.status(201).json({ message: 'Marked as watched' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;
