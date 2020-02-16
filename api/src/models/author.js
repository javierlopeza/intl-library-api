module.exports = (sequelize, DataTypes) => {
  const Author = sequelize.define(
    'Author',
    {
      name: {
        allowNull: false,
        type: DataTypes.STRING,
        unique: true,
        validate: {
          notEmpty: true,
        },
      },
      gender: {
        type: DataTypes.STRING,
      },
      birthPlace: {
        type: DataTypes.STRING,
      },
      birthDate: {
        type: DataTypes.DATE,
      },
      deathDate: {
        type: DataTypes.DATE,
      },
    },
    {},
  );

  Author.associate = (models) => {
    Author.hasMany(models.Book, { as: 'books', foreignKey: 'authorId' });
  };

  return Author;
};
