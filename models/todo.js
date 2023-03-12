const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
  // creating schemas for todos
  task: {
    type: String,
    unique: true,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  completed: {
    type: Boolean,
    default: false,
  },
});

const todoModel = mongoose.model("Todo", todoSchema);

module.exports = todoModel;