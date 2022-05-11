const { Schema, model } = require('mongoose');

const projectSchema = new Schema({
  userId: {type: String},
  name: { type: String, required: true },
  image: { type: String },
});

const Project = model('projects', projectSchema);
module.exports = Project;