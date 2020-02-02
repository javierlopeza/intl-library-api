module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.addColumn(
    'Books',
    'isbn',
    {
      type: Sequelize.STRING,
      unique: true,
    },
  ),

  down: (queryInterface) => queryInterface.removeColumn('Books', 'isbn'),
};
