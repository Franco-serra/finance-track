const { User } = require('../models/Users');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const register = async (req, res) => {
    const { name, email, password } = req.body;

    try {
        const existingEmail = await User.findOne({ email });
        const hashedPassword = await bcrypt.hash(password, 10);
        if (existingEmail)
            return res.status(409).json({ message: "Email ya registrado" });
        else {
            
            const newUser = new User({
                name,
                email,
                password: hashedPassword,
            });

            const savedUser = await newUser.save();
            res.status(201).json(savedUser);
        }

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Error del servidor" });
    }
};

const login = async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await User.findOne({ email })
        const isValidPassword = await bcrypt.compare(password, user.password)
        if (!user) {
            return res.status(400).json('email or password incorrect')
        }
        if (!isValidPassword) {
            return res.status(400).json('email or password incorrect')
        }
        const token = jwt.sign(
            { userId: user._id },
            process.env.JWT_SECRET,
            { expiresIn: '24h' }
        );
        res.json({
            token,
            user: {
                id: user._id,
                name: user.name,
                email: user.email
            }
        });

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Error del servidor" });
    }
}

const getUser = async (req, res) => {
    try {
        const users = await User.find();
        if (users.length === 0) {
            return res.status(404).json('Users not found');
        }
        res.status(200).json(users)
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Error del servidor" });
    }
}

module.exports = {
    register,
    login,
    getUser
};