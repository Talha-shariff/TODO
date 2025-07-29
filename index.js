const express = require('express');
const { createTodo, updateTodo } = require('./types'); // Zod schemas for validation
const { todo } = require('./db'); // Mongoose model for Todo collection
const app = express();

// Middleware to parse JSON request bodies
app.use(express.json());

/**
 * POST /todo
 * Creates a new todo item
 * Validates request body using Zod schema `createTodo`
 */
app.post("/todo", async function(req, res) {
    const createPayload = req.body;

    // Validate request body against schema
    const parsedPayload = createTodo.safeParse(createPayload);
    if (!parsedPayload.success) {
        res.status(411).json({
            msg: "Invalid input data",
        });
        return;
    }

    // Create and store todo item in the database
    await todo.create({
        title: createPayload.title,
        description: createPayload.description,
        completed: false,
    });

    res.json({
        msg: "Todo created successfully",
    });
});

/**
 * GET /todos
 * Returns all todos from the database
 */
app.get("/todos", async function(req, res) {
    const todos = await todo.find({});
    res.json({
        todos,
    });
});

/**
 * PUT /completed
 * Marks a specific todo as completed
 * Validates request using Zod schema `updateTodo`
 */
app.put("/completed", async function(req, res) {
    const updatePayload = req.body;

    // Validate request body against schema
    const parsedPayload = updateTodo.safeParse(updatePayload);
    if (!parsedPayload.success) {
        res.status(411).json({
            msg: "Invalid update payload",
        });
        return;
    }

    // Update the specified todo's completed status
    await todo.updateOne(
        { _id: req.body.id },
        { completed: true }
    );

    res.json({
        msg: "Todo marked as completed",
    });
});

// Start the server on port 3000
app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});
