const Shop = require('../models/shopModel');

exports.getShops = async (req, res) => {
    try {
        const shops = await Shop.find();
        res.json(shops);
    } catch (err) {
        res.status(500).json({ msg: 'Server error' });
    }
};

exports.addShop = async (req, res) => {
    const { name, location } = req.body;

    try {
        const newShop = new Shop({
            name,
            location
        });

        await newShop.save();

        res.status(201).json({ msg: 'Shop added successfully' });
    } catch (err) {
        res.status(500).json({ msg: 'Server error' });
    }
};

exports.removeShop = async (req, res) => {
    const { id } = req.params;

    try {
        await Shop.findByIdAndRemove(id);

        res.status(200).json({ msg: 'Shop removed successfully' });
    } catch (err) {
        res.status(500).json({ msg: 'Server error' });
    }
};

