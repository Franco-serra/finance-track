const transactionSchema = new mongoose.Schema({
    description: {type: String, required: true},
    amount: {type: Number, required: true },
    type: {type: String, require: true},
    category: {type: String, required: true},
    date: { type: Date, default: Date.now},
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }
});

exports.Transaction = mongoose.model('Transaction', transactionSchema)