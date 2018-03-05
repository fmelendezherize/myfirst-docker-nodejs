var mongoose = require('mongoose');

//new schema
var ProjectSchema = mongoose.Schema({
    title: {type: String, required: true},
    tasks: [{item: String}],
    createdAt: {type: Date, default: Date.now}
});

//new model
var Project = mongoose.model('projects', ProjectSchema);

module.exports = Project;
