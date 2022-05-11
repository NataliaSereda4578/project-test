const { Schema, model } = require('mongoose');

const userSchema = new Schema({
  email: { type: String, required: true, unique: true },
  fullname: String,
  password: { type: String, required: true },
});

const Users = model('users', userSchema);
module.exports = Users;
