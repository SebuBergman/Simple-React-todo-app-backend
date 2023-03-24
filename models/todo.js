const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
  // creating schemas for todos
  task: {
        type: String,
        unique: true,
        required: true
    },
  completed:{
      type: Boolean,
      default: false
  },
  userId: {
    type: String,
    required: true
  }
});

const todoModel = mongoose.model("Todo", todoSchema);

module.exports = todoModel;