const Author = require('../models/author.model');

const showAuthors = async (req, res) => {
    try {
        const authors = await Author.find().sort({ 'name': 1 });
        res.json(authors);
    } catch (error) {
        res.json(error);
    }
}

const addAuthor = async (req, res) => {
    try {
        const authorCreated = await Author.create(req.body);
        res.json(authorCreated);
    } catch (error) {
        res.status(400);
        res.json(error);
    }
}

const editAuthor = async (req, res) => {
    try {
        const editedAuthor = await Author.findOneAndUpdate({ _id: req.params.id }, req.body, { new:true, runValidators: true });
        res.json(editedAuthor);
    } catch (error) {
        console.log(error);
        res.status(400);
        res.json(error);
    }

}

const removeAuthor = async (req, res) => {
    try {
        const authorRemoved = await Author.deleteOne({ _id: req.params.id });
        res.json(authorRemoved);
    } catch (error) {
        res.status(400);
        res.json(error);
    }
}

const searchAuthor = async (req, res) => {
    try {
        const wantedauthor = await Author.findOne({ _id: req.params.id });
        res.json(wantedauthor);
    } catch (error) {
        res.status(400);
        res.json(error);
    }
    
}

module.exports = {
    showAuthors,
    addAuthor,
    editAuthor,
    removeAuthor,
    searchAuthor
}