const expenses = require("../data/expenses");

const getAllExpenses = (req, res) => {
    const allExpenses = expenses.getAll();
    res.json(allExpenses);
};

const addExpense = (req, res) => {
    const { title, amount } = req.body;

    if (!title || !amount) {
        return res.status(400).json({ error: "Title and amount are required." });
    }

    const newExpense = expenses.add({ title, amount });
    res.status(201).json(newExpense);
};

module.exports = {
    getAllExpenses,
    addExpense
};
