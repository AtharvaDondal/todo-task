const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
const PORT = 5000;

app.use(cors());
app.use(bodyParser.json());

let tasks = []; // In-memory array to store tasks

// GET endpoint to fetch all tasks
app.get("/tasks", (req, res) => {
  res.status(200).json(tasks);
});

// POST endpoint to add a task
app.post("/tasks", (req, res) => {
  const { task } = req.body;
  if (!task) {
    return res.status(400).json({ message: "Task is required" });
  }
  tasks.push(task);
  res.status(201).json({ message: "Task added successfully" });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
