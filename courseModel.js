// contactModel.js
var mongoose = require('mongoose');
// Setup schema
var courseSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    topic: {
        type: String,
        required: true
    },
    price: {
        type : String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    provider: {
        type: String,
        required: true
    },
    ranking: {
        type: String,
        required: false

    },
    rankingAuthor: {
        type: String,
        required: false
    },

    create_date: {
        type: Date,
        default: Date.now
    }
});
// Export Contact model
var Course = module.exports = mongoose.model('course', courseSchema);
module.exports.get = function (callback, limit) {
    Course.find(callback).limit(limit);
}