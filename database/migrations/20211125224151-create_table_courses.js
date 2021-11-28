'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

     await queryInterface.createTable('courses', { 

      id: {
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
      type: Sequelize.INTEGER.UNSIGNED
    },
     
    title: {
        allowNull: false,
        type: Sequelize.STRING(150)
    },

    description: {
      allowNull: false,
      type: Sequelize.STRING(1234)
    },

    image: {
      allowNull: false,
      type: Sequelize.STRING(1234)
    },

    teacher: {
      allowNull: false,
      type: Sequelize.STRING
    },

    classList: {
      allowNull: false,
      type: Sequelize.STRING(1234)
    },

    createdAt: {
      type: Sequelize.DATE,
      },
  
    updatedAt: {
        type: Sequelize.DATE,
        },
        
    deleted: {
        type: Sequelize.BOOLEAN,
        defaultValue: false

      }
    },
    {
      indexes:[
       {
         unique: false,
         fields:['deleted']
       }
      ]
  });
  },

  down: async (queryInterface, Sequelize) => {

     await queryInterface.dropTable('courses');
  }
};
