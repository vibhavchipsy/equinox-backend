// index.js
const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 3000; // Render assigns a dynamic port

app.use(cors());
app.use(express.json());

// Example route
app.get("/", (req, res) => {
    res.send("Welcome to Equinox API!");
});

// Example of expenses route (expand as needed)
let expenses = [
    { id: 1, title: "Coffee", amount: 3.5 },
    { id: 2, title: "Groceries", amount: 20 }
];

app.get("/expenses", (req, res) => {
    res.json(expenses);
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
