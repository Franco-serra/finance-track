const {
    createTransaction,
    updateTransaction,
    getTransaction

} = require('../controllers/transactionsControllers')
const authMiddleware = require('../middleware/auth');

const express = require('express');
const router = express.Router();

router.post('/', authMiddleware, createTransaction)
router.put('/:id', authMiddleware, updateTransaction);
router.get('/', authMiddleware, getTransaction)

module.exports = router;