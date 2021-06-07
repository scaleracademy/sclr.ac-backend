const mongoose = require('mongoose');

const DB_URI = process.env.DB_URI || 'mongodb://localhost/shotenURL';

mongoose.connect(DB_URI, {useNewUrlParser: true, useUnifiedTopology: true});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    console.log("connected to db");
});

module.exports = {db}