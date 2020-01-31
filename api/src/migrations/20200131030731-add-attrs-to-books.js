module.exports = {
  up: (queryInterface, Sequelize) => Promise.all([
    queryInterface.addColumn('Books', 'bookFormat', {
      type: Sequelize.STRING,
    }),
    queryInterface.addColumn('Books', 'goodreadsUrl', {
      type: Sequelize.STRING,
    }),
    queryInterface.addColumn('Books', 'language', {
      type: Sequelize.STRING,
    }),
    queryInterface.addColumn('Books', 'pages', {
      type: Sequelize.INTEGER,
    }),
    queryInterface.addColumn('Books', 'publisher', {
      type: Sequelize.STRING,
    }),
    queryInterface.addColumn('Books', 'ratingAverage', {
      type: Sequelize.FLOAT,
    }),
    queryInterface.addColumn('Books', 'ratingCount', {
      type: Sequelize.INTEGER,
    }),
  ]),

  down: (queryInterface) => Promise.all([
    queryInterface.removeColumn('Books', 'bookFormat'),
    queryInterface.removeColumn('Books', 'goodreadsUrl'),
    queryInterface.removeColumn('Books', 'language'),
    queryInterface.removeColumn('Books', 'pages'),
    queryInterface.removeColumn('Books', 'publisher'),
    queryInterface.removeColumn('Books', 'ratingAverage'),
    queryInterface.removeColumn('Books', 'ratingCount'),
  ]),
};
