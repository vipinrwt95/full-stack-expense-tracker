const express = require('express');

const ExpenseController = require('../controllers/Expense')

const router = express.Router();

router.post('/addExpense',ExpenseController.postAddExpense);
router.get('/allExpenses',ExpenseController.getAllExpenses);
router.get('/Expenses/delete/:id',ExpenseController.Delete);
router.post('/editexpenses/item/:id',ExpenseController.sendEdit);


module.exports = router;