const AuthorControllers = require('../controllers/author.controller');

module.exports = function (app) {
    app.get('/api/authors', AuthorControllers.showAuthors);

    app.post('/api/authors', AuthorControllers.addAuthor);

    app.put('/api/authors/:id', AuthorControllers.editAuthor);

    app.delete('/api/authors/:id', AuthorControllers.removeAuthor);

    app.get('/api/authors/:id', AuthorControllers.searchAuthor);
}

