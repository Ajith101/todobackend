const mongoose = require("mongoose");

const TodosScheema = new mongoose.Schema({
  name: String,
  email: String,
  mobnum: Number,
  like: Boolean,
});

const Todos = mongoose.model("todo", TodosScheema);

module.exports = Todos;
