const express = require('express');
const router = express.Router();
const cloudinary = require('../config/cloudinary');
const upload = require('../middleware/multer');
const fs = require('fs');

router.post('/video', upload.single('video'), async (req, res) => {
  try {
    console.log("File received:", req.file); 
    
    if (!req.file) {
      return res.status(400).json({ error: 'No file uploaded' });
    }

    const result = await cloudinary.uploader.upload(req.file.path, {
      resource_type: 'video'
    });

    fs.unlinkSync(req.file.path);

    console.log("Uploaded to Cloudinary:", result.secure_url);
    res.json({ url: result.secure_url });
  } catch (err) {
    console.error("Error uploading:", err);
    res.status(500).json({ error: 'Upload failed' });
  }
});


module.exports = router;
