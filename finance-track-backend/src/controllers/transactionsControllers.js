const { Transaction } = require('../models/Transaction');

const createTransaction = async (req, res) => {
    const { description, amount, type, category, date} = req.body
    try {
        if (!description || !amount || !type || !category )
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
        const items = await Transaction.find();

        if (items.length === 0) {
            return res.status(200).json([]); 
        }

        res.status(200).json(items)

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Error del servidor" });
    }
}


module.exports = {
    createTransaction,
    getTransaction
}