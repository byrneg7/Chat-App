const jwt = require('jsonwebtoken')
const User = require('../models/User');
const keys = require("../config/keys");

const auth = async (req, res, next) => {
    const token = req.header('Authorization').replace('Bearer ', '');
    jwt.verify(token, keys.JWT_KEY, async (err, data) => {
        if (err) {
            if (err instanceof jwt.TokenExpiredError) {
                console.log('Token expired');
                return res.status(401).send({error: 'Not authorized to access this resource'})
            }
            res.status(401).send({error: 'Something broke'})
        } else {
            const user = await User.findOne({_id: data._id, 'tokens.token': token});
            if (!user) {
                console.log('Couldn\'t find user');
                return res.status(400).send({error: 'Something broke'})
            }
            req.user = user;
            req.token = token;
            next();

        }
    });
};

module.exports = auth;