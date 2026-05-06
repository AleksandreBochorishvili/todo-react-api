const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

let todos = [
  { id: 1, text: "პირველი task", completed: false }
];

app.get("/todos", (req, res) => {
  res.json(todos);
});

app.post("/todos", (req, res) => {
  const newTodo = {
    id: Date.now(),
    text: req.body.text,
    completed: false,
  };
  todos.unshift(newTodo);
  res.status(201).json(newTodo);
});

app.delete("/todos/:id", (req, res) => {
  const id = Number(req.params.id);
  todos = todos.filter((t) => t.id !== id);
  res.status(204).send();
});

app.listen(5000, () => {
  console.log("API running on http://localhost:5000");
});