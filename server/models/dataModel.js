const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
    data: String,
});

module.exports = mongoose.model('Data', dataSchema);
