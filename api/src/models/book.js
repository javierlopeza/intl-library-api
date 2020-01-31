module.exports = (sequelize, DataTypes) => {
  const Book = sequelize.define(
    'Book',
    {
      authorId: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
      bookFormat: {
        type: DataTypes.STRING,
      },
      datePublished: {
        type: DataTypes.DATE,
      },
      description: {
        type: DataTypes.TEXT,
      },
      goodreadsUrl: {
        type: DataTypes.STRING,
      },
      imageUrl: {
        type: DataTypes.STRING,
      },
      isbn: {
        type: DataTypes.STRING,
        unique: true,
      },
      language: {
        type: DataTypes.STRING,
      },
      pages: {
        type: DataTypes.INTEGER,
      },
      publisher: {
        type: DataTypes.STRING,
      },
      ratingAverage: {
        type: DataTypes.FLOAT,
      },
      ratingCount: {
        type: DataTypes.INTEGER,
      },
      title: {
        allowNull: false,
        type: DataTypes.STRING,
        validate: {
          notEmpty: true,
        },
      },
    },
    {
      scopes: {
        withAuthor: () => ({
          include: [{ model: sequelize.models.Author, as: 'author' }],
        }),
      },
    },
  );

  Book.associate = (models) => {
    Book.belongsTo(models.Author, { as: 'author', foreignKey: 'authorId' });
  };

  return Book;
};
