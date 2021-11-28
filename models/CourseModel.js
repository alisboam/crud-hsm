const { Course } = require("../database/models");
const Sequelize = require("sequelize");
const Op = Sequelize.Op;

exports.createCourse = async ({
  title,
  description,
  image,
  teacher,
  classList
}) => {
  
  const newCourse = await Course.create({
    title,
    description,
    image,
    teacher,
    classList
  })

  return newCourse;
};

exports.findCourse = async(search, limit, offset) => {
  return Course.findAndCountAll({
    where: {
      deleted: false,
      [Op.or]: [
        {
          title: {
            [Op.like]: `%${search}%`,
          },
        },
        {
          description: {
            [Op.like]: `%${search}%`,
          },
        },
      ],
    },
    limit: limit || 4,
    offset: offset || 0
  });
};

exports.listAllCourse = async(limit, offset) => {
  return Course.findAndCountAll({
    where: {
      deleted: false, 
    },

    limit: limit || 4,
    offset: offset || 0
  });
};

exports.findCourseByID = async (id) => {
  return Course.findByPk(id)
};

exports.updateCourse = async ( id, { title, description, image, teacher, classList}) => {
  return Course.update({
    title,
    description,
    image,
    teacher,
    classList
  }, { where: { id: id, deleted: false }});
}

exports.deleteCourse = async (id) => {
  return Course.update({
    deleted: true
  }, { where: { id: id }});
}