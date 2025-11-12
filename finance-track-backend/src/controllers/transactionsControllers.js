const { Transaction } = require('../models/Transaction');

const createTransaction = async (req, res) => {
    const { description, amount, type, category, date } = req.body
    try {
        if (!description || !amount || !type || !category)
            return res.status(400).json({ message: "field required" });

        const newTransaction = new Transaction({
            description,
            amount,
            type,
            category,
            date,
            user: req.user.id
        })
        const saveTransaction = await newTransaction.save();
        res.status(201).json(saveTransaction)
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Error del servidor" });
    }
}


const getTransaction = async (req, res) => {
    try {
        const items = await Transaction.find({ user: req.user.id }).sort({ date: -1 });

        if (items.length === 0) {
            return res.status(200).json([]);
        }

        res.status(200).json(items)

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Error del servidor" });
    }
}

const updateTransaction = async (req, res) => {
    const { description, amount, type, category, date } = req.body
    const transactionId = req.params.id

    try {
        const updatedTransaction = await Transaction.findOneAndUpdate(
            { 
                _id: transactionId, 
                user: req.user.id  
            },
            { 
                $set: { description, amount, type, category, date } 
            },
            { new: true } 
        )
        if (!updatedTransaction) {
            return res.status(404).json({ error: "Transaction not found" })
        }

        res.status(200).json(updatedTransaction)
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Error del servidor" });
    }
}

const deleteTransaction = async (req, res) => {
    const transactionId = req.params.id
    try {
        const deletedTransaction = await Transaction.findOneAndDelete({ _id: transactionId, user: req.user.id })
        if (!deletedTransaction) {
            return res.status(404).json('transaction not found')
        }
        res.json({ message: "Transaction deleted successfully" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Error del servidor" });
    }
}

module.exports = {
    createTransaction,
    getTransaction,
    updateTransaction,
    deleteTransaction
}