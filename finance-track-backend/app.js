const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const auth = require('./src/routes/auth');
const transaction = require('./src/routes/transaction')

dotenv.config();

const app = express();


app.use(cors());
app.use(bodyParser.json());

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/finance-track')
    .then(() => console.log('✅ Conectado a MongoDB'))
    .catch(err => console.error('❌ Error conectando a MongoDB:', err));

app.get('/', (req, res) => {
    res.json({ message: '🚀 FinanceTrack API funcionando!' });
});

app.use(express.json());

app.use('/api/auth', auth);
app.use('/api/transaction', transaction)



const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`🎯 Servidor corriendo en puerto ${PORT}`);
});