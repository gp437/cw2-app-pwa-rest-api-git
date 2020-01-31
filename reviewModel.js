// contactModel.js
var mongoose = require('mongoose');
// Setup schema
var reviewSchema = mongoose.Schema({
    data: {
        type: String,
        required: true
    },
    provider: {
        type: String,
        required: true
    },
    create_date: {
        type: Date,
        default: Date.now
    }
});
// Export Contact model
var Review = module.exports = mongoose.model('review', reviewSchema);
module.exports.get = function (callback, limit) {
    Review.find(callback).limit(limit);
}