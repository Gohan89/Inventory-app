const User = require('../models/userModel');

exports.getUsers = async (req, res) => {
    try {
        const users = await User.find();
        res.json(users);
    } catch (err) {
        res.status(500).json({ msg: 'Server error' });
    }
};

exports.addUser = async (req, res) => {
    const { username, password, role } = req.body;

    try {
        const existingUser = await User.findOne({ username });
        if (existingUser) {
            return res.status(400).json({ msg: 'User already exists' });
        }

        const hashedPassword = await bcrypt.hash(password, 12);

        const newUser = new User({
            username,
            password: hashedPassword,
            role
        });

        await newUser.save();

        res.status(201).json({ msg: 'User added successfully' });
    } catch (err) {
        res.status(500).json({ msg: 'Server error' });
    }
};

exports.removeUser = async (req, res) => {
    const { id } = req.params;

    try {
        await User.findByIdAndRemove(id);

        res.status(200).json({ msg: 'User removed successfully' });
    } catch (err) {
        res.status(500).json({ msg: 'Server error' });
    }
};

