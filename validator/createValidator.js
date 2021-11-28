const { check, body } = require('express-validator');

const checkIfIsTitle = check("title")
  .isLength({ min: 2 })
  .withMessage("O campo título deve ter ao menos 2 caracteres");

const checkIfIfIsDescription = check("description")
  .isLength({ min: 5 })
  .withMessage("O campo professor deve ter ao menos 5 caracteres");

const checkIfIfIsImage = check("image")
.matches(/^(ftp|http|https):\/\/[^ "]+$/)
.withMessage("Insira um link válido");

const checkIfIfIsTeacher = check("teacher")
  .isLength({ min: 5 })
  .withMessage("O campo professor deve ter ao menos 5 caracteres");

const checkIfIsLink = body("classList").custom((classList) => {
  if(classList) {
    if (classList.split(",").filter(link => !/^(http|https):\/\/[^ "]+$/.test(link.trim())).length > 0) {
      return Promise.reject("A lista de aulas deve conter URLs separadas por vírgula");
    }
    return Promise.resolve();
  }
});

module.exports = [
  checkIfIsTitle,
  checkIfIfIsDescription,
  checkIfIfIsImage,
  checkIfIfIsTeacher,
  checkIfIsLink
]