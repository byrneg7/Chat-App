const User = require("../models/User");

module.exports = (req, res) => {
    const user = new User(req.body);
    user.save()
        .then(async () => {
            const token = await user.generateAuthToken();
            res.status(201).send({user, token})
        })
        .catch(err => {
            console.log(err);
            res.status(500).send({error: err.message})
        })
};

