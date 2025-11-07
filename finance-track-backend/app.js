const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');


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

// Importar rutas (las crearás después)
// const authRoutes = require('./routes/auth');
// const transactionRoutes = require('./routes/transactions');
// app.use('/api/auth', authRoutes);
// app.use('/api/transactions', transactionRoutes);


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`🎯 Servidor corriendo en puerto ${PORT}`);
});