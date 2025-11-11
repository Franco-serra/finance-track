const {
    register,
    login,
    getUser
} = require('../controllers/authControllers');
const express = require('express');
const router = express.Router();

router.post('/', register);
router.post('/login', login)
router.get('/', getUser);


module.exports = router;