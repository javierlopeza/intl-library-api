const Promise = require('bluebird');
const getJSON = require('../utils/seeds/get-json');

const { Book, Genre } = require('../models');

module.exports = {
  async up(queryInterface) {
    const booksJson = await getJSON('books.json');
    const books = booksJson.books.filter((book) => book.genres.length > 0);
    const genresIds = {};
    const genresObj = await Genre.findAll({ attributes: ['id', 'name'] });
    genresObj.forEach((g) => {
      genresIds[g.name] = g.id;
    });
    const bookGenresBulkInsertPromises = Promise.map(
      books,
      async ({ isbn, genres }) => {
        const bookGenresData = [];
        const bookId = (await Book.findOne({ where: { isbn } })).id;
        genres.forEach((name) => {
          bookGenresData.push({
            bookId,
            genreId: genresIds[name],
            createdAt: new Date(),
            updatedAt: new Date(),
          });
        });
        return queryInterface.bulkInsert('BookGenres', bookGenresData);
      },
    );
    return bookGenresBulkInsertPromises;
  },

  down: (queryInterface) => queryInterface.bulkDelete('BookGenres', null, {}),
};
