const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");
const get = require("lodash/get");
const head = require("lodash/head");

// Middleware
app.use(cors());
app.use(express.json());

// Routes
// Create a Todo
app.post("/todos", async (request, response) => {
  try {
    const description = get(request, "body.description", "");
    const newTodo = await pool.query(
      "INSERT INTO todo (description) VALUES ($1) RETURNING *",
      [description]
    );
    return response.json(head(newTodo.rows));
  } catch (error) {
    console.log(error.message);
    return response.sendStatus(400);
  }
});

// Get All Todos
app.get("/todos", async (_request, response) => {
  try {
    const allTodos = await pool.query("SELECT * FROM todo");
    response.json({
      data: get(allTodos, "rows", []),
      count: get(allTodos, "rowCount", 0),
    });
  } catch (error) {
    console.log(error.message);
    return response.sendStatus(400);
  }
});

// Get a Todo
app.get("/todos/:id", async (request, response) => {
  try {
    const id = get(request, "params.id", "");
    const todo = await pool.query("SELECT * FROM todo WHERE todo_id = ($1)", [
      id,
    ]);
    response.json(head(get(todo, "rows", [])));
  } catch (error) {
    console.log(error.message);
    return response.sendStatus(400);
  }
});

// Update a Todo
app.put("/todos/:id", async (request, response) => {
  try {
    const id = get(request, "params.id", "");
    const description = get(request, "body.description", "");
    const updateTodo = await pool.query(
      "UPDATE todo SET description = ($1) WHERE todo_id = ($2)",
      [description, id]
    );
    response.json(updateTodo);
  } catch (error) {
    console.log(error.message);
    return response.sendStatus(400);
  }
});

// Delete a Todo
app.delete("/todos/:id", async (request, response) => {
  try {
    const id = get(request, "params.id", "");
    const deleteTodo = await pool.query("DELETE FROM todo WHERE todo_id = ($1)", [
      id,
    ]);
    response.json(deleteTodo);
  } catch (error) {
    console.log(error.message);
    return response.sendState(400);
  }
});

// Listen
app.listen(5000, () => {
  console.log("Server has started on port 5000");
});
