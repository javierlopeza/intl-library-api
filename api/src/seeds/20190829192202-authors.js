const { parseDate } = require('../utils/seeds/Parser');
const getJSON = require('../utils/seeds/get-json');

module.exports = {
  up: async (queryInterface) => {
    const authorsJson = await getJSON('authors.json');
    const authorsData = [];
    authorsJson.authors.forEach(
      ({
        name, gender, birthDate, birthPlace, deathDate, goodreadsUrl,
      }) => {
        authorsData.push({
          name,
          gender,
          birthDate: parseDate(birthDate),
          birthPlace,
          deathDate: parseDate(deathDate),
          goodreadsUrl,
          createdAt: new Date(),
          updatedAt: new Date(),
        });
      },
    );
    return queryInterface.bulkInsert('Authors', authorsData);
  },

  down: (queryInterface) => queryInterface.bulkDelete('Authors', null, {}),
};
