const mongoose = require('mongoose');

const PostSchema = mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true 
    },
    type: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Posts', PostSchema);