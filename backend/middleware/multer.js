const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname));
  }
});

const videoFilter = (req, file, cb) => {
  if (file.mimetype.startsWith('video/')) {
    cb(null, true);
  } else {
    cb('Invalid file type. Only video files are allowed!', false);
  }
};

const upload = multer({ storage: storage, fileFilter: videoFilter });

module.exports = upload;
