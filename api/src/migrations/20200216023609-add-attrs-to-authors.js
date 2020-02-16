module.exports = {
  up: (queryInterface, Sequelize) => Promise.all([
    queryInterface.addColumn('Authors', 'gender', {
      type: Sequelize.STRING,
    }),
    queryInterface.addColumn('Authors', 'goodreadsUrl', {
      type: Sequelize.STRING,
    }),
    queryInterface.addColumn('Authors', 'birthPlace', {
      type: Sequelize.STRING,
    }),
    queryInterface.addColumn('Authors', 'birthDate', {
      type: Sequelize.DATEONLY,
    }),
    queryInterface.addColumn('Authors', 'deathDate', {
      type: Sequelize.DATEONLY,
    }),
  ]),

  down: (queryInterface) => Promise.all([
    queryInterface.removeColumn('Authors', 'gender'),
    queryInterface.removeColumn('Authors', 'goodreadsUrl'),
    queryInterface.removeColumn('Authors', 'birthPlace'),
    queryInterface.removeColumn('Authors', 'birthDate'),
    queryInterface.removeColumn('Authors', 'deathDate'),
  ]),
};
