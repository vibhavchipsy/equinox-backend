const express = require("express");
const cors = require("cors");

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// Routes
const expensesRoutes = require("./routes/expenses");
app.use("/expenses", expensesRoutes);

// Default route
app.get("/", (req, res) => {
    res.send("Welcome to Equinox API!");
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});