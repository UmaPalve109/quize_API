const mongoose = require('mongoose');

const questionSchema = mongoose.Schema(
    {
        id: Number,
        question: String,
        options: {
            option1: String,
            option2: String,
            option3: String,
            option4: String
        },
        answer_index: Number
    }
);

module.exports = mongoose.model('question', questionSchema);