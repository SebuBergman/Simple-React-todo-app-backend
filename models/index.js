const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1/todo-app', {
  // connecting to the mongodb database with the name of: todo-app locally
  keepAlive: true,
  useNewUrlParser: true,
  useUnifiedTopology: true
});

mongoose.set("debug", true);
mongoose.Promise = Promise;

module.exports.Todo = require("./todo");