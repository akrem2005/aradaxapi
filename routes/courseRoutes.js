const express = require("express");
const router = express.Router();
const courseController = require("../controllers/courseController");

router.get("/", courseController.getCourses);
router.post("/", courseController.createCourse);
router.put("/:id", courseController.updateCourse);
router.delete("/:id", courseController.deleteCourse);
router.get("/:id", courseController.getCourseById);
router.post("/uploadVideo", courseController.uploadVideo);
module.exports = router;
