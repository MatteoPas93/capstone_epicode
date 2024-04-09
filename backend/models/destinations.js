const mongoose = require('mongoose');

const DestinationSchema = new mongoose.Schema({
    travel_location: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    image_location: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true,
        max: 250
    },
    main_attractions: {
        type: String,
        required: true,
        max: 250
    }
}, {timestamps: true, strict: true});

module.exports = mongoose.model('locationModel', DestinationSchema, 'destination');