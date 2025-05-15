let expenseData = [
    { id: 1, title: "Coffee", amount: 3.5 },
    { id: 2, title: "Groceries", amount: 20 }
];

let nextId = 3;

function getAll() {
    return expenseData;
}

function add({ title, amount }) {
    const newExpense = { id: nextId++, title, amount };
    expenseData.push(newExpense);
    return newExpense;
}

module.exports = {
    getAll,
    add
};
