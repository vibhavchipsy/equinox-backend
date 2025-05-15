const express = require("express");
const router = express.Router();
const {
    getAllExpenses,
    addExpense
} = require("../controllers/expensesController");

// Routes
router.get("/", getAllExpenses);
router.post("/", addExpense);

module.exports = router;
