var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/my-tv-db');

module.exports.Shows = require('./shows.js');
