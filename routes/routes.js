const express = require("express");
const router = express.Router();
const Task = require("../models/models");

router.get("/", (req, res) => {
  Task.find()
    .then((docs) => res.json(docs))
    .catch((err) => console.log(err));
});

router.post("/", (req, res) => {
  const taskss = new Task(req.body);
  taskss
    .save()
    .then((docs) => res.json(docs))
    .catch((err) => console.log(err));
});

router.put("/:id", (req, res) => {
  Task.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
    .then((docs) => res.json(docs))
    .catch((err) => console.log(err));
});

router.delete("/:id", (req, res) => {
  Task.findByIdAndDelete(req.params.id)
    .then((docs) => res.json(docs))
    .catch((err) => console.log(err));
});

module.exports = router;
