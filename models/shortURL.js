const mongoose = require("mongoose");

const shortenURLSchema = new mongoose.Schema({
    url: {
        type: String,
        required: true
    },
    shortCode: {
        type: String,
        require: true
    },
    visits: {
        type: Number,
        default: 0
    },
    lastVisited: {
        type: Number,
        default: 0
    }
})

const ShortenURL = mongoose.model('ShortenURL', shortenURLSchema);

module.exports = {ShortenURL}