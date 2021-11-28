module.exports = function (sequelize, DataTypes) {
  const Course = sequelize.define('Course', {
      id: {
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
      type: DataTypes.INTEGER.UNSIGNED
    },
     
    title: {
        allowNull: false,
        type: DataTypes.STRING(150)
    },

    description: {
      allowNull: false,
      type: DataTypes.STRING(1234)
    },

    image: {
      allowNull: false,
      type: DataTypes.STRING(1234)
    },

    teacher: {
      allowNull: false,
      type: DataTypes.STRING
    },

    classList: {
      allowNull: false,
      type: DataTypes.STRING(1234)
    },

    createdAt: {
    type: DataTypes.DATE,
    },

    updatedAt: {
      type: DataTypes.DATE,
      },
      
    deleted: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    }
  },
    {
      indexes:[
       {
         unique: true,
         fields:['deleted']
       }
      ]
    });

  return Course
};
