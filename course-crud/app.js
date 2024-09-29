require("dotenv").config();
const express = require("express");
const app = express();
const PORT = process.env.PORT;

const mongoose = require("mongoose");

mongoose.connect(process.env.MONGO_URL, {}).then(() => {
  console.log("Connected to MongoDB");
});

const coursesRouter = require("./routes/course");
const userRouter = require("./routes/user");

app.use(express.json());

const logger2 = (req, res, next) => {
  console.log(`Logger 2: ${req.method} Request received on ${req.url}`);
  next();
};

const logger1 = (req, res, next) => {
  console.log(`Logger 1: ${req.method} Request received on ${req.url}`);
  next();
};

app.use(logger2);
app.use(logger1);

app.get("/", (req, res) => {
  return res.send("Hello World");
});

app.use("/api/v1/courses", coursesRouter);
app.use("/api/v1/users", userRouter);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

// Course rating application
// Get all courses
// GET /api/v1/courses

// Get one single course
// GET /api/v1/courses/courseId

// Create a new course
// POST /api/v1/courses
