const mongoose = require('mongoose');

const NoteSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'Please add a title'],
        unique: true,
        trim: true,
        maxlength: [50, 'Title cannot be more than 50 characters']
    },
    description: {
        type: String,
        required: true,
        maxlength: [300, 'Description cannot be more than 300 characters']
    }
});

const Note = mongoose.model('Note',NoteSchema);

module.exports = Note;