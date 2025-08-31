const express = require('express');
const router = express.Router();
const User = require('../models/User');

router.post('/:parentId/add-child', async (req, res) => {
  const { childEmail } = req.body;
  try {
    const parent = await User.findById(req.params.parentId);
    const child = await User.findOne({ email: childEmail, role: 'Child' });

    if (!parent || parent.role !== 'Parent') {
      return res.status(400).json({ message: 'Invalid parent ID' });
    }

    if (!child) {
      return res.status(404).json({ message: 'Child not found or not registered' });
    }

    parent.children = parent.children || [];
    if (!parent.children.includes(child._id)) {
      parent.children.push(child._id);
      await parent.save();
    }

    res.json({ message: 'Child linked successfully' });
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
});

router.get('/:parentId/children', async (req, res) => {
  try {
    const parent = await User.findById(req.params.parentId).populate('children');
    if (!parent) return res.status(404).json({ message: 'Parent not found' });
    res.json(parent.children || []);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;
