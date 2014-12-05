var mongoose = require('mongoose');

var TaskSchema = mongoose.Schema({
    description: String
});

module.exports = mongoose.model('tasks', TaskSchema);
