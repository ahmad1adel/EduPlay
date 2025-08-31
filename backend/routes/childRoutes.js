const express = require("express");
const router = express.Router();
const Child = require("../models/Child");

router.post("/", async (req, res) => {
  try {
    const { name, age } = req.body;
    const newChild = new Child({ name, age });
    await newChild.save();
    res.status(201).json({ message: "Child added successfully", data: newChild });
  } catch (error) {
    res.status(500).json({ message: "Error adding child", error });
  }
});

router.get("/", async (req, res) => {
  try {
    const children = await Child.find();
    res.status(200).json(children);
  } catch (error) {
    res.status(500).json({ message: "Error fetching children", error });
  }
});

module.exports = router;
