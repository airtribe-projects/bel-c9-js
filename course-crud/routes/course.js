const express = require("express");
const router = express.Router();

const Course = require("../models/course");

const getAllCourses = async (req, res) => {
  const courses = await Course.find();
  res.send(courses);
};

router.get("/", getAllCourses);

router.get("/:id", async (req, res) => {
  const course = await Course.findById(req.params.id);
  res.send(course);
});

router.post("/", async (req, res) => {
  const course = req.body;
  const dbCourse = await Course.create(course);
  res.send({ course: dbCourse });
});

module.exports = router;
