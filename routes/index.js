var express = require('express');
const router = express.Router();
const courseController = require("../controller/CourseController");
const createValidator = require("../validator/createValidator")

/* GET home page. */
router.get('/', courseController.index);

router.get('/course/new', courseController.newCourse);

router.post('/course', createValidator, courseController.createCourse);

router.get('/courses/search', courseController.searchCourse);

router.get('/courses/show/:id', courseController.show);

router.get('/courses/update/:id', courseController.getUpdateCourse);

router.post('/courses/update/:id', createValidator, courseController.updateCourse);

router.post('/courses/delete/:id', courseController.deleteCourse);

module.exports = router;
