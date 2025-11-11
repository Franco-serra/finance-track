const jwt = require('jsonwebtoken');
const {User} = require('../models/Users');

const authMiddleware = async (req, res, next) => {
    try {

        const token = req.header('Authorization')?.replace('Bearer ', '');


        if (!token) {
            return res.status(401).json({ error: 'Acceso denegado. Token requerido.' });
        }


        const decoded = jwt.verify(token, process.env.JWT_SECRET);


        const user = await User.findById(decoded.userId).select('-password');

        if (!user) {
            return res.status(401).json({ error: 'Token inválido. Usuario no encontrado.' });
        }

        req.user = user;


        next();
    } catch (error) {
        console.error('Error en auth middleware:', error);
        res.status(401).json({ error: 'Token inválido.' });
    }
};

module.exports = authMiddleware;