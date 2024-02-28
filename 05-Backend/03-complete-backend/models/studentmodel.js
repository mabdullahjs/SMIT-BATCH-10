const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const studentSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: [true, 'Please also submit email'],
        unique: true
    },
    age: {
        type: Number,
        required: true
    }
})

module.exports = mongoose.model('Student', studentSchema);