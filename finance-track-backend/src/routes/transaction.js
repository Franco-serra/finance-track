const {
    createTransaction,
    updateTransaction,
    getTransaction,
    deleteTransaction

} = require('../controllers/transactionsControllers')
const authMiddleware = require('../middleware/auth');

const express = require('express');
const router = express.Router();

router.post('/', authMiddleware, createTransaction)
router.put('/:id', authMiddleware, updateTransaction);
router.get('/', authMiddleware, getTransaction)
router.delete('/:id', authMiddleware, deleteTransaction)

module.exports = router;