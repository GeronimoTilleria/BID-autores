const mongoose = require('mongoose');

const AuthorSchema = new mongoose.Schema({
    name: {
        type: String,
        minLength: [3, 'The name must have at least more than 3 characters'],
        required: [true, "Title is required"],
        unique: true
    }
}, { timestamps: true });

const Author = mongoose.model('Author', AuthorSchema);

module.exports = Author;