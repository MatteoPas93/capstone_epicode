const mongoose = require('mongoose');

const ReviewsSchema = new mongoose.Schema({
    comment: {
        type: String,
        required: true
    },
    evaluation_score: {
        type: Number,
        required: true
    }
}, {timestamps: true, strict: true});

// module.exports = mongoose.model('reviewsModel', ReviewsSchema, 'reviews')