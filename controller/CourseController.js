const courseModel = require("../models/CourseModel")
const { validationResult } = require('express-validator');

const controller = {
    index: async function(req, res, next) {
        const limit = parseInt(req.query.limit) || 4
        const offset = parseInt(req.query.offset) || 0
        const { count, rows } = await courseModel.listAllCourse(limit, offset);
        res.render('index', { limit, offset, count, allCourses: rows });
    },
    
    newCourse: function(req, res, next) {
        res.render('create', {alert: false, course: {}, errors: null});
    },

    createCourse: async function(req, res, next) {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.render("create", {alert: false, course: req.body, errors });
        }
        const {
            title,
            description,
            image,
            teacher,
            classList
        } = req.body;
        await courseModel.createCourse({
            title,
            description,
            image,
            teacher,
            classList
        })
        res.render('create', {alert: true, course: {}, errors: null});
    },

    searchCourse: async function(req, res, next) {
        const allCourses = await courseModel.findCourse(req.query.search);
        res.render('', {allCourses});
    },
    
    show: async function(req, res, next) {
        const { id } = req.params;
        const course = await courseModel.findCourseByID(id);
        const embedLinks = course.classList.split(",")
            .map(link => link.replace("watch?v=","embed/"))
            .map(link => link.split("&")[0]);
        res.render('show', { course, embedLinks });
    },

    getUpdateCourse: async function(req, res, next) {
        const { id } = req.params;
        const course = await courseModel.findCourseByID(id);
        res.render('update', { course, errors: null})
    },

    updateCourse: async function(req, res, next) {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.render("update", { course: req.body, errors });
        }
        const {
            title,
            description,
            image,
            teacher,
            classList
        } = req.body;
        await courseModel.updateCourse(req.params.id, {
            title,
            description,
            image,
            teacher,
            classList
        });
        res.redirect('/')
    },

    deleteCourse: async function(req, res, next) {
         await courseModel.deleteCourse(req.params.id)
         res.redirect('/')
     },
};

module.exports = controller;